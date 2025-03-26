"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { Fragment } from "react"
import IconButton from "./icon-button"
import { X } from "lucide-react"

interface ModalProp {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
}

const Modal: React.FC<ModalProp> = ({ ...props }) => {
  const { onClose, isOpen } = props
  return (
    <Transition
      show={isOpen}
      appear
      as={Fragment}
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity 100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div
                  className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 
                  pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8"
                >
                  <div className="absolute ring-1 rounded-full top-4 border-none">
                    <IconButton
                      onClick={onClose}
                      icon={<X size={15} />}
                    />
                  </div>
                  <div className="mt-6 w-full">{props?.children}</div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
