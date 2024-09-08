import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: number } }) {
  try {
    const data = await prisma.heightCalculator.findUnique({
      where: {
        id: +params.id
      }
    })
    const total = await prisma.news.count()
    return NextResponse.json(
      {
        data,
      },
      { status: 200 }
    )
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function DELETE(req: Request, { params }: { params: { id: number } }) {
  try {
    await prisma.heightCalculator.delete({
      where: {
        id: +params.id
      }
    })
    return NextResponse.json(
      {
        message: "Xóa thành công"
      },
      { status: 200 }
    )
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}