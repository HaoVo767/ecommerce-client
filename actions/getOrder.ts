import { IOrder } from "@/type"

export const getOrder = async (id: string | undefined): Promise<IOrder> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data: IOrder = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return {} as IOrder
  }
}
