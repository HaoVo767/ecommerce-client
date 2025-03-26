import { cn } from "@/lib/utils"
import { Tab } from "@headlessui/react"
import { IImage } from "@/type"
import Image from "next/image"

interface GalleryTabProps {
  image: IImage
  key: string
}
const GalleryTab: React.FC<GalleryTabProps> = ({ ...props }) => {
  const { image } = props
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
      {({ selected }) => (
        <div>
          <span className="absolute h-full w-full aspect-square inset-0 rounded-md overflow-hidden">
            <Image
              src={image?.url}
              alt="image-gallery"
              fill
              sizes="100%"
              priority
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "absolute inset-0 rounded-md ring-2 ring-offset-2",
              selected ? "ring-black" : "ring-transparent"
            )}
          ></span>
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab
