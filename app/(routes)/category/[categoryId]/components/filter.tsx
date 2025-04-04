"use client"
import Button from "@/components/ui/buttons"
import { cn } from "@/lib/utils"
import { ISize, IColor } from "@/type"
import { useSearchParams, useRouter } from "next/navigation"
import qs from "query-string"
import { useEffect, useState } from "react"
interface FilterProps {
  data: (ISize | IColor)[]
  name: string
  valueKey: string
}
const Filter: React.FC<FilterProps> = ({ ...props }) => {
  const [isMounted, setIsMounted] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  const { data, name, valueKey } = props
  const selectValue = searchParams.get(valueKey)

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString())
    const query = {
      ...current,
      [valueKey]: id,
    }
    if (current[valueKey] === id) {
      query[valueKey] = null
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    )

    router.push(url)
  }
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div
            key={filter.id}
            className="flex items-center"
          >
            <Button
              className={cn(
                "rounded-sm text-sm text-gray-800 p-2 bg-white border border-gray-300 cursor-pointer",
                selectValue === filter.id && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter
