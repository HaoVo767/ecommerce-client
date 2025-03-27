import Container from "@/components/ui/container"
import { getBillboard } from "@/actions/getBillboaed"
import BillBoard from "@/components/billboard"
import { getProduct } from "@/actions/getProduct"
import ProductList from "@/components/products-list"
import { IProduct } from "@/type"

const HomePage = async () => {
  const billboardData = await getBillboard("a9f9042a-972a-4a2b-8b4d-7a302381b904")
  const query = {
    isFeatured: true,
  }
  const products: IProduct[] = await getProduct(query)
  return (
    <Container>
      <BillBoard data={billboardData} />
      <div className="flex flex-col gap-y-8 mt-6 px-4">
        <ProductList
          title={"Featured product"}
          items={products}
        />
      </div>
    </Container>
  )
}

export default HomePage
