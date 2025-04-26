import { CarouselFeaturedProduct } from "./CarouselFeaturedProduct"
import { IProduct } from "@/type"
import { getProduct } from "@/actions/getProduct"

export async function Carousel() {
  const query = {
    isFeatured: true,
  }
  const products: IProduct[] = await getProduct(query)

  if (!products?.length) return null

  const featuredImages = products.map((product) => {
    return {
      url: product?.thumnailUrl,
      name: product.name,
      productId: product.id,
      price: product.price,
    }
  })
  const featuredImagesData = [
    ...featuredImages,
    ...featuredImages,
    ...featuredImages,
    ...featuredImages,
    ...featuredImages,
  ]
  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <CarouselFeaturedProduct featuredImages={featuredImagesData} />
    </div>
  )
}
