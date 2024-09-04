import { cookies } from "next/headers";

const cookieStore = cookies();
const token = cookieStore.get('token')?.value

export async function getNews({ page, pageSize }: { page?: number, pageSize?: number }) {
  const params = new URLSearchParams();
  if (page) params.append('page', page.toString());
  if (pageSize) params.append('pageSize', pageSize.toString());
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/news?${params.toString()}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return res.json()
}