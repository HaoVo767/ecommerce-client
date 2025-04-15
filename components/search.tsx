"use client"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Button from "@/components/ui/buttons"
import { SearchIcon } from "lucide-react"

export default function Search() {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [searchKey, setSearchKey] = useState<string>("")
  const router = useRouter()

  const handleRedirectSearchPage = () => {
    if (searchKey.trim() === "") return
    router.push(`/search?keyword=${searchKey}`)
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleRedirectSearchPage()
    }
  }
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  return (
    <div className="ml-0 md:ml-10 flex ">
      <Input
        className="w-[300px] lg:w-[400px] text-sm md:text-md"
        placeholder="Tìm theo tên sản phẩm..."
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        className="relative bg-transparent right-12"
        type="submit"
        onClick={handleRedirectSearchPage}
      >
        <SearchIcon className="w-4 h-4 text-gray-500" />
      </Button>
    </div>
  )
}
