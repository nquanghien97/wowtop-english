import prisma from "@/lib/db";
import bcrypt from 'bcrypt';
import { jwtVerify, SignJWT } from "jose";
import { NextRequest, NextResponse } from 'next/server';

const secretKey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function createToken(userId: number) {
  const expiresIn = Math.floor(Date.now() / 1000) + (24 * 60 * 60); // 1 days expiration
  return new SignJWT({ userId: userId.toString(), expires: expiresIn })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(encodedKey)
};

export async function verifyToken(session: string | undefined = '') {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

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
        message: "Incorrect email or password"
      }, { status: 400 });
    }

    const passwordValidated = await bcrypt.compare(password, user.password);
    if (!passwordValidated) {
      return NextResponse.json({
        success: false,
        message: "Incorrect email or password"
      }, { status: 400 });
    }

    const accessToken = await createToken(user.id);

    return NextResponse.json({
      success: true,
      message: "Login successfully",
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
