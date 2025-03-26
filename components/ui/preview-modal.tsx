"use client"

import { usePreviewModal } from "@/hooks/use-preview-modal"
import Modal from "./modal"
import Gallery from "../gallery/page"
import ProductInfo from "../product-info"

const PreviewModal = () => {
  const previewModal = usePreviewModal()
  const product = usePreviewModal((state) => state.data)
  if (!product) return null
  return (
    <>
      <Modal
        isOpen={previewModal.isOpen}
        onClose={previewModal.onClose}
      >
        <div className="flex gap-x-6 flex-wrap ">
          <div className="items-start">
            <Gallery images={product.image} />
          </div>
          <div className="text-left">
            <ProductInfo data={product} />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PreviewModal
