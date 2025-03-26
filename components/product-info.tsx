"use client"

import { IProduct } from "@/type"
import FormatCurrency from "./ui/formatCurrency"
import Button from "@/components/ui/buttons"
import { ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { useCart } from "@/hooks/use-cart"

interface ProductProps {
  data: IProduct
}
const ProductInfo: React.FC<ProductProps> = ({ ...props }) => {
  const { data } = props
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const cart = useCart()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null

  return (
    <div className="text-gray-700">
      <div className="text-3xl font-semibold">{data?.name}</div>
      <div className="flex flex-start mt-2 border-b-1 border-gray-300 pb-4">
        <FormatCurrency value={+data?.price} />
      </div>

      <div className="flex flex-col gap-y-2 mt-2">
        <div className="flex gap-x-2">
          <h3 className="font-semibold">Size:</h3>
          <div className="">{data?.size?.name}</div>
        </div>
        <div className="flex gap-x-2 items-center">
          <h3 className="font-semibold">Color:</h3>
          <div
            className="h-4 w-4 rounded-full mt-[2px]"
            style={{ backgroundColor: data?.color?.value }}
          ></div>
        </div>
        <div className="mt-6">
          <Button
            className="text-white flex"
            onClick={() => cart.addItem(data)}
          >
            Add to cart
            <ShoppingCart className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
