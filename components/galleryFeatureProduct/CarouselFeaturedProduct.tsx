"use client"
import { formatCurrency } from "@/lib/formatCurency"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export interface IFeaturedImages {
  name: string
  productId: string
  price: string
  // id: string
  url: string
}
export function CarouselFeaturedProduct({
  isInteractive = true,
  active,
  label,
  featuredImages,
}: {
  featuredImages: IFeaturedImages[]
  isInteractive?: boolean
  active?: boolean
  label?: {
    title: string
    amount: string
    currencyCode: string
    position?: "bottom" | "center"
  }
}) {
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const ulRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    setTimeout(() => {
      if (ulRef.current) {
        ulRef.current.style.transform = `translateX(-${ulRef.current.scrollWidth}px)`
        ulRef.current.style.transition = `transform ${featuredImages.length * 10}s linear`
      }
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  useEffect(() => {
    setTimeout(() => {
      if (ulRef.current) {
        ulRef.current.style.transform = `translateX(0px)`
        ulRef.current.style.transition = `transform ${featuredImages.length * 10}s linear`
      }
    }, featuredImages.length * 8000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (!isMounted) return null

  return (
    <ul
      className="flex animate-carousel gap-4 custom-scrollbar"
      ref={ulRef}
    >
      {featuredImages.map((featuredImage, i) => (
        <li
          key={`${featuredImage.productId}${i}`}
          className="relative aspect-square  h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
        >
          <Link
            href={`/product/${featuredImage.productId}`}
            className="relative h-full w-full "
          >
            <div
              className={clsx(
                "group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative transition-transform ease-[cubic-bezier(0.25, 1, 0.5, 1)]",
                {
                  relative: label,
                  "border-2 border-blue-600": active,
                  "border-neutral-200 dark:border-neutral-800": !active,
                }
              )}
              style={{
                transform: `translateX(-${ulRef.current?.scrollWidth}px)`,
                transition: `transform ${featuredImages.length * 5}s ease-in-out`,
              }}
            >
              {featuredImage.url ? (
                <div className="relative h-full w-full">
                  <Image
                    className={clsx("relative h-full w-full object-contain", {
                      "transition duration-300 ease-in-out group-hover:scale-105": isInteractive,
                    })}
                    src={featuredImage.url}
                    alt={featuredImage.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    priority
                  />
                  <div className="absolute bottom-3 left-3 mt-4 text-md font-semibold">
                    {formatCurrency(+featuredImage.price)}
                  </div>
                </div>
              ) : null}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
