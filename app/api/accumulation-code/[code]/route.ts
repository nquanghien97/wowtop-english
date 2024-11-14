import prisma from "@/lib/db";
import { StatusCode } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { code: string } }) {
  const { code } = params
  const { status } = await req.json()
  try {
    const code_exist = await prisma.accumulation_code.findUnique({
      where: {
        code
      }
    })
    if(!code_exist) {
      return NextResponse.json({ message: 'Mã code này không tồn tại' }, { status: 404 });
    }
    await prisma.accumulation_code.update({
      where: {
        code
      },
      data: {
        status,
      }
    })
    return NextResponse.json(
      {
        message: 'Cập nhật trạng thái code thành công',
      },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Có lỗi xảy ra' }, { status: 500 });
    }
  }
}