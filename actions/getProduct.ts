import qs from "query-string"

interface Query {
  category?: string
  size?: string | undefined
  color?: string | undefined
  isFeatured?: boolean
}

export const getProduct = async (query: Query) => {
  try {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/product/findByQuery`
    const queryURL = qs.stringifyUrl({ url: URL, query: { ...query } })
    const response = await fetch(queryURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
