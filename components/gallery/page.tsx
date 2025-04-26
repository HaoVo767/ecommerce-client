"use client"

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import { IImage as ImageType } from "@/type"
import GalleryTab from "@/components/gallery/gallery-tab"
import Image from "next/image"
import { useEffect, useState } from "react"

interface GalleryProps {
  images: ImageType[]
}
const Gallery: React.FC<GalleryProps> = ({ ...props }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    setIsMounted(true)
  }, [])
  if (!isMounted) return null
  const { images } = props
  return (
    <TabGroup
      as="div"
      className="flex flex-col-reverse"
    >
      <div className="mx-auto hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList
          className="grid grid-cols-4 gap-6 mt-10"
          as="div"
        >
          {images?.map((image) => (
            <GalleryTab
              key={image.id}
              image={image}
            />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-auto">
        {images?.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square relative h-[400px] sm:h-[500px] w-[300px] sm:w-[400px] sm:rounded-lg overflow-hidden">
              <Image
                src={image?.url}
                alt="image"
                fill
                sizes="100%"
                priority
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}

export default Gallery
