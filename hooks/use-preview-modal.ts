import { create } from "zustand"
import { IProduct } from "@/type"

interface PreviewModalStore {
  isOpen: boolean
  data?: IProduct
  onOpen: (data: IProduct) => void
  onClose: () => void
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  onOpen: (data: IProduct) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
