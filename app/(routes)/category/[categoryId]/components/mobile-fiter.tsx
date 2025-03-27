"use client"

import { IColor, ISize } from "@/type"
import Button from "@/components/ui/buttons"
import { Plus, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"
import IconButton from "@/components/ui/icon-button"
import Filter from "./filter"
import { useParams } from "next/navigation"

interface MobileFitersProps {
  sizes: ISize[]
  colors: IColor[]
}

const MobileFiters: React.FC<MobileFitersProps> = ({ ...props }) => {
  const { sizes, colors } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const params = useParams()
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  const onOpen = () => {
    setIsOpen(true)
  }
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex items-center gap-x-2 lg:hidden text-white mb-2"
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-25"></div>
        <div className="fixed z-40 inset-0 flex">
          <DialogPanel
            className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto 
          bg-white py-4 pb-6 shadow-xl
        "
          >
            <div className="flex items-center justify-end px-4 ">
              <IconButton
                onClick={onClose}
                icon={<X />}
              />
            </div>
            <div className="pt-6 px-4">
              {params?.categoryId !== "7622b9d9-39b5-4e8e-89b4-dc8c99ee41ee" && (
                <Filter
                  valueKey="size"
                  name="Sizes"
                  data={sizes}
                />
              )}

              <Filter
                valueKey="color"
                name="Colors"
                data={colors}
              />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default MobileFiters
