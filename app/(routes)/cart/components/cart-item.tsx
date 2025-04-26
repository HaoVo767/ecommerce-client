"use client"

import Image from "next/image"
import { IProduct } from "@/type"
import { useState, useEffect } from "react"
import IconButton from "@/components/ui/icon-button"
import { X } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

interface CartItemProp {
  data: IProduct
}
const CartItem: React.FC<CartItemProp> = ({ ...props }) => {
  const cart = useCart()
  const { data } = props
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  const handleRemoveItem = () => {
    cart.removeItem(data.id)
  }
  return (
    <li className="flex py-6  border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          priority
          fill
          src={data?.thumnailUrl}
          alt="cart product image"
          className="object-cover object-center"
          sizes="100"
        />
      </div>
      <div className="relative ml:4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton
            icon={<X size={15} />}
            onClick={handleRemoveItem}
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between ">
            <p className="text-lg font-semibold text-black">{data.name}</p>
          </div>
          <div className="mt-1 flex text-sm">
            <div className="text-gray-900 flex">
              <p className="text-gray-500">color</p>: {data.color.name}
            </div>
            <div className="text-gray-900 ml-4 border-l border-gray-500 pl-4 flex">
              <p className="text-gray-500">size</p>: {data.size.name}
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
