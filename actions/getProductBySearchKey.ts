import qs from "query-string"

interface Query {
  keyword: string
}

export const getProductBySearchKey = async (query: Query) => {
  try {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/product/findBySearchKeyword`
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
