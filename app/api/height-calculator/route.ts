import prisma from "../../../lib/db";
import { NextResponse } from "next/server";
import { deleteFile, uploadFile } from "@/utils/fileUpload";
import { File } from 'formdata-node';

export async function POST(req: Request) {
  // const authorId = req.headers.get('X-User-ID');
  // if (!authorId) {
  //   return NextResponse.json({ status: 401, headers: { 'Content-Type': 'application/json' } })
  // }
  const { code, fatherName, fatherHeight, motherName, motherHeight, phoneNumber, fullName, date_of_birth, currentHeight, currentWeight, gender } = await req.json();
  try {

    const data = await prisma.heightCalculator.create({
      data: {
        code,
        fatherName,
        fatherHeight,
        motherName,
        motherHeight,
        phoneNumber,
        fullName,
        date_of_birth,
        currentHeight,
        currentWeight,
        gender
      }
    })
    return NextResponse.json({ data }, { status: 200 })
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json({ message: err.message }, { status: 500 })
    } else {
      return NextResponse.json({ message: "Có lỗi xảy ra" }, { status: 500 })
    }
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page');
  const pageSize = url.searchParams.get('pageSize');
  const code = url.searchParams.get('code');
  const phoneNumber = url.searchParams.get('phoneNumber');
  const fullName = url.searchParams.get('fullName');
  const parentName = url.searchParams.get('parentName');

  const skip = page && pageSize ? (parseInt(page, 10) - 1) * parseInt(pageSize, 10) : undefined;
  const take = pageSize ? parseInt(pageSize, 10) : undefined;
  try {
    const data = await prisma.heightCalculator.findMany({
      where: {
        ...(code && { code: { contains: code } }),
        ...(phoneNumber && { phoneNumber: { contains: phoneNumber } }),
        ...(fullName && { fullName: { contains: fullName } }),
        ...(parentName && {
          OR: [
            { motherName: { contains: parentName } },
            { fatherName: { contains: parentName } }
          ]
        })
      },
      skip,
      take
    })
    const total = await prisma.news.count()
    return NextResponse.json(
      {
        data,
        paging: {
          page,
          pageSize,
          total
        }
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