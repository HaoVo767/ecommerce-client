import { ICategory } from "@/type"

export const getCategorys = async (): Promise<ICategory[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/category/findAllCategory/${process.env.NEXT_PUBLIC_STORE_ID}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    const data: ICategory[] = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return []
  }
}

export const getCategory = async (categoryId: string): Promise<ICategory> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${categoryId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data: ICategory = await response.json()
    return data
  } catch (e) {
    console.log(e)
    return {} as ICategory
  }
}
