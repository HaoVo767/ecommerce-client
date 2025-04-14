import Container from "@/components/ui/container"
import { getBillboard } from "@/actions/getBillboaed"
import BillBoard from "@/components/billboard"
import { getProduct } from "@/actions/getProduct"
import ProductList from "@/components/products-list"
import { IProduct } from "@/type"
import { Carousel } from "@/components/galleryFeatureProduct"

const HomePage = async () => {
  const billboardData = await getBillboard("a9f9042a-972a-4a2b-8b4d-7a302381b904")
  const query = {
    isFeatured: true,
  }
  const products: IProduct[] = await getProduct(query)
  return (
    <Container>
      <BillBoard data={billboardData} />
      <div className="max-h-[550px] mt-10 w-full lg:w-3/4 mx-auto">
        <Carousel />
      </div>
      <div className="w-full lg:w-9/10 xl:w-4/5 items-center place-self-center">
        <ProductList
          title={"Featured product"}
          items={products}
        />
      </div>
    </Container>
  )
}

export default HomePage
