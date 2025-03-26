"use client"
import { useState, useEffect, MouseEvent } from "react"
import Image from "next/image"
import { IProduct } from "@/type"
import IconButton from "@/components/ui/icon-button"
import { Expand, ShoppingCart } from "lucide-react"
import FormatCurrency from "@/components/ui/formatCurrency"
import { useRouter } from "next/navigation"
import { usePreviewModal } from "@/hooks/use-preview-modal"
import { useCart } from "@/hooks/use-cart"
interface ProductCardProps {
  data: IProduct
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])
  if (!isMounted) return null

  const onPreview = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    previewModal.onOpen(data)
  }
  const handleAddtoCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    cart.addItem(data)
  }
  const handleDetailProduct = () => {
    router.push(`/product/${data?.id}`)
  }

  return (
    <div
      className="bg-white group cursor-pointer rounded-xl border p-3 w-56"
      onClick={handleDetailProduct}
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.image[0]?.url}
          alt={data?.name}
          fill
          priority
          sizes="100%"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center ">
            <IconButton
              onClick={onPreview}
              icon={
                <Expand
                  size={20}
                  className="text-gray-600"
                />
              }
            />
            <IconButton
              onClick={handleAddtoCart}
              icon={
                <ShoppingCart
                  size={20}
                  className="text-gray-600"
                />
              }
            />
          </div>
        </div>
      </div>
      <div className="font-semibold text-md">{data?.name}</div>
      <div className="text-gray-500 text-sm">{data?.category?.name}</div>
      <FormatCurrency
        className="mt-4"
        value={+data?.price}
      />
    </div>
  )
}

export default ProductCard
