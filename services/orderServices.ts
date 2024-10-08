import { OrderEntity } from "@/entities/order";

export async function createOrder(data: OrderEntity) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const errorResponse = await res.json();
    throw new Error(errorResponse.message || 'Something went wrong!');
  }
  return res.json();
}