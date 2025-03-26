import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { IProduct } from "@/type"
import toast from "react-hot-toast"

interface CartStore {
  items: IProduct[]
  addItem: (data: IProduct) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItem = get().items
        const isExistingItem = currentItem.find((item) => item.id === data.id)

        if (isExistingItem) {
          return toast("Item already in cart")
        }
        set({ items: [...get().items, data] })
        toast.success("Item added to cart")
      },
      removeItem: (id: string) => {
        set({ items: get().items.filter((item) => item.id !== id) })
      },
      removeAll: () => {
        set({ items: [] })
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
