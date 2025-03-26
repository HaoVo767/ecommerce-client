import Container from "@/components/ui/container"
import { getBillboard } from "@/actions/getBillboaed"
import BillBoard from "@/components/billboard"
import { getProduct } from "@/actions/getProduct"
import ProductList from "@/components/products-list"
import { IProduct } from "@/type"

const HomePage = async () => {
  const billboardData = await getBillboard("22043ad0-7f9c-429a-9b41-8cd7a03cd10c")
  const query = {
    isFeatured: true,
  }
  const products: IProduct[] = await getProduct(query)
  return (
    <Container>
      <BillBoard data={billboardData} />
      <div className="flex flex-col gap-y-8 px-4">
        <ProductList
          title={"Featured product"}
          items={products}
        />
      </div>
    </Container>
  )
}

export default HomePage
