import prisma from "@/lib/db";
import { createToken } from "@/lib/token";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password, full_name, location, phone_number } = await req.json();

  if (!username || !password || !full_name || !location || !phone_number) {
    return NextResponse.json({
      success: false,
      message: "Vui lòng nhập đầy đủ thông tin"
    }, { status: 400 });
  }

  try {
    const user_exist = await prisma.user.findUnique({
      where: { username }
    });

    if (user_exist) {
      return NextResponse.json({
        success: false,
        message: "Tài khoản đã tồn tại!"
      }, { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 12)
    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        full_name,
        location,
        phone_number,
      }
    })

    const accessToken = await createToken(user.id, user.role);

    return NextResponse.json({
      success: true,
      message: "Đăng ký thành công",
      accessToken
    }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: "Server error, please try again.",
      error: err.message,
    }, { status: 500 });
  }
}
