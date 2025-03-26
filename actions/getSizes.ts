import { ISize } from "@/type"

export const getSizes = async (): Promise<ISize[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/size/findAllSize/${process.env.NEXT_PUBLIC_STORE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const data: ISize[] = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
