"use client"

import { useEffect, useState } from "react"
import { IOrder } from "@/type"
import { CheckCircle } from "lucide-react"
import OrderItem from "./orderReceipt"
import FormatCurrency from "@/components/ui/formatCurrency"

interface DetailOrderProps {
  data: IOrder
}
const DetailOrder: React.FC<DetailOrderProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null
  const totalPrice = data?.orderItems?.reduce((total, item) => {
    return total + Number(item.product.price)
  }, 0)
  return (
    <div className="w-2/3 mx-auto border border-gray-500 shadow-2xl rounded-2xl p-4">
      <div className="mx-auto flex text-green-400 justify-center">
        <CheckCircle
          size={50}
          className="text-green-400"
        />
        Order success
      </div>
      <div>
        {data?.orderItems?.map((item) => (
          <OrderItem
            key={item?.id}
            data={item?.product}
          />
        ))}
      </div>
      <div className="flex justify-between mt-6 mx-6">
        <div className="text-gray-600">
          <div>Name: {data?.name}</div>
          <div>Phone: {data?.phone}</div>
          <div>Address: {data?.address}</div>
        </div>
        <div className="text-gray-600 flex-col">
          Total
          <div>
            <FormatCurrency value={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailOrder
