import { jwtVerify, SignJWT } from "jose";

const secretKey = process.env.NEXT_PUBLIC_ACCESS_TOKEN_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function createToken(user_id: number, user_role: string) {
  const expiresIn = Math.floor(Date.now() / 1000) + (24 * 60 * 60); // 1 days expiration
  return new SignJWT({ user_id: user_id.toString(), user_role, expires: expiresIn })
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