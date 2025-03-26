"use client"

import { useEffect, useState } from "react"
import Button from "@/components/ui/buttons"
import { ShoppingBag } from "lucide-react"
import { useCart } from "@/hooks/use-cart"
import { useRouter } from "next/navigation"

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)
  const cart = useCart()
  const router = useRouter()
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])
  if (!isMounted) return <div className="ml-8 mt-1 text-right grow">Loading...</div>
  const handleViewCart = () => {
    router.push("/cart")
  }
  return (
    <div className="grow text-right">
      <Button
        className="cursor-pointer bg-transparent"
        onClick={handleViewCart}
      >
        <div className="flex items-center gap-x-1">
          <ShoppingBag className="h-10 w 10" />
          <span className="text-black text-sm">{cart.items.length}</span>
        </div>
      </Button>
    </div>
  )
}

export default NavbarActions
