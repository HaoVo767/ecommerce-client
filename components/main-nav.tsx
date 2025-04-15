"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { ICategory } from "@/type"

interface MainNavProps {
  data: ICategory[]
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const pathName = usePathname()
  if (!isMounted || !data) return <div className="ml-8 mt-1">Loading...</div>
  const routes = data?.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName.includes(`/category/${route.id}`),
  }))
  return (
    <>
      <div className="ml-8 hidden md:flex gap-x-4  ">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "hover:text-black w-max",
              route.active ? "text-black border-b border-gray-500" : "text-gray-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <div className="bolck md:hidden">
        <Menu className="w-6 h-6 relative top-[2px]" />
      </div>
    </>
  )
}

export default MainNav
