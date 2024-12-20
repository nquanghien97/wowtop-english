import prisma from "@/lib/db";
import { createToken } from "@/lib/token";
import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({
      success: false,
      message: "Missing email or password"
    }, { status: 400 });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { username }
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "Thông tin đăng nhập không chính xác"
      }, { status: 400 });
    }

    const passwordValidated = await bcrypt.compare(password, user.password);
    if (!passwordValidated) {
      return NextResponse.json({
        success: false,
        message: "Tài khoản hoặc mật khẩu không chính xác"
      }, { status: 400 });
    }

    const accessToken = await createToken(user.id, user.role);

    return NextResponse.json({
      success: true,
      message: "Đăng nhập thành công",
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
