import { IProduct } from "@/type"

export const getDetailProduct = async (id: string): Promise<IProduct> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data: IProduct = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return {} as IProduct
  }
}
