import { getDetailProduct } from "@/actions/getDetailProduct"
import { getProduct } from "@/actions/getProduct"
import Gallery from "@/components/gallery/page"
import ProductInfo from "@/components/product-info"
import ProductList from "@/components/products-list"
import Container from "@/components/ui/container"

// interface ProductPageProps {
//   params: {
//     productId: string
//   }
// }

async function ProductPage({ params }: { params: Promise<{ productId: string }> }) {
  const { productId } = await params
  const product = await getDetailProduct(productId)
  const suggestedProducts = await getProduct({ category: product?.category?.id })
  return (
    <Container>
      <div className="w-full lg:w-2/3 mx-auto px-4 mt-4 pt-10 sm:px-6 lg:px-8 border-t-1 border-gray-300">
        <div className="lg:grid lg:grid-cols-2 lg:item-start lg:gap-x-8">
          <Gallery images={product.image} />
          <ProductInfo data={product} />
        </div>
        <hr className="mt-10" />
        <ProductList
          title="Related items"
          items={suggestedProducts}
        />
      </div>
    </Container>
  )
}

export default ProductPage
