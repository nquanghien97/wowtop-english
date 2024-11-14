import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const user_id = req.headers.get('x-user-id')
  const { code } = await req.json();
  try {
    if (!user_id) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }
    const check_code = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    const increment_points = 650000
    if (!check_code) {
      return NextResponse.json({ success: false, message: 'Mã tích điểm không hợp lệ' }, { status: 400 });
    }
    if (check_code.status === "EXPIRED") {
      return NextResponse.json({ success: true, message: 'Mã tích điểm đã hết hạn' }, { status: 200 });
    }
    if (check_code.status === "USED") {
      return NextResponse.json({ success: true, message: 'Mã tích điểm đã được sử dụng' }, { status: 200 });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(user_id)
      }
    })
    if (!user) {
      return NextResponse.json({ success: true, message: 'Người dùng không tồn tại' }, { status: 200 });
    }
    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: parseInt(user_id)
        },
        data: {
          points_accumulation: user?.points_accumulation + increment_points
        }
      }),
      prisma.accumulation_code.update({
        where: {
          code
        },
        data: {
          status: "USED"
        }
      })
    ])
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}