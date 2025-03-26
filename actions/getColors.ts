import { IColor } from "@/type"

export const getColors = async (): Promise<IColor[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/color/findAllColor/${process.env.NEXT_PUBLIC_STORE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const data: IColor[] = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}
