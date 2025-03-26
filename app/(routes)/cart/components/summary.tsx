"use client"

import { useState, useEffect } from "react"
import Button from "@/components/ui/buttons"
import FormatCurrency from "@/components/ui/formatCurrency"
import { useCart } from "@/hooks/use-cart"
import { useRouter, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import Modal from "@/components/ui/modal"
import { useModal } from "@/hooks/use-modal"
import { Input } from "@/components/ui/input"
import { IOrderContact } from "@/type"

const Summary = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  const searchParams = useSearchParams()
  const router = useRouter()
  const items = useCart((state) => state.items)
  const { isOpen, onClose, onOpen } = useModal()
  const [orderContact, setOrderContact] = useState<IOrderContact>({
    name: "",
    phone: "",
    address: "",
  })
  const [formMessage, setFormMessage] = useState<boolean>(false)

  const onChangeContact = (data: Partial<IOrderContact>) => {
    setOrderContact((prev) => ({ ...prev, ...data }))
    setFormMessage(false)
  }
  const removeAll = useCart((state) => state.removeAll)
  const totalPrice = items?.reduce((total, items) => {
    return total + Number(items?.price)
  }, 0)

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("payment complete")
      removeAll()
    }

    if (searchParams.get("canceled")) {
      toast.error("something went wrong")
    }
  }, [removeAll, searchParams])

  const handleOrder = async () => {
    const { name, phone, address } = orderContact
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setFormMessage(true)
      return
    }
    const productIds = items.map((item) => {
      return { productId: item.id }
    })

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/order/${process.env.NEXT_PUBLIC_STORE_ID}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ productIds, name, phone, address }),
      })
      const data = await response.json()
      router.push(`/order/${data?.id}`)
      removeAll()
    } catch (err) {
      toast.error("Something went wrong! Try again after few minute")
      console.log(err)
    }
  }

  if (!isMounted) return null
  return (
    <div className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900 ">Order summary</h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-300 pt-4">
          <div className="text-base font-medium text-gray-900">Order total price</div>
          <FormatCurrency value={totalPrice} />
        </div>
      </div>
      <Button
        className="w-full mt-6 text-white"
        onClick={() => onOpen()}
        disabled={items?.length === 0}
      >
        Order
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="flex flex-col gap-y-4 w-2/3 ml-10">
          <div className="gap-y-1">
            <label className="text-gray-600">Name</label>
            <Input
              className="w-full"
              value={orderContact.name}
              name="name"
              placeholder="Enter your name..."
              onChange={(e) => onChangeContact({ name: e.target.value })}
            />
          </div>
          <div className="gap-y-1">
            <label className="text-gray-600">Phone</label>
            <Input
              value={orderContact.phone}
              name="phone"
              onChange={(e) => onChangeContact({ phone: e.target.value })}
              placeholder="Enter your phone number..."
            />
          </div>
          <div className="gap-y-1">
            <label className="text-gray-600">Address</label>
            <Input
              value={orderContact.address}
              name="address"
              placeholder="Enter your address..."
              onChange={(e) => onChangeContact({ address: e.target.value })}
            />
          </div>
          {formMessage && <div className="text-md text-red-600">Please fill out all fields!</div>}
          <div className="flex mt-8 justify-between">
            <Button
              className="text-white w-1/3"
              onClick={handleOrder}
            >
              Order
            </Button>
            <div className="">
              <p className="text-sm text-gray-400">Total</p>
              <FormatCurrency value={totalPrice} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Summary
