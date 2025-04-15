import { getProductBySearchKey } from "@/actions/getProductBySearchKey"
import Container from "@/components/ui/container"
import NoResults from "@/components/ui/no-result"
import ProductCard from "@/components/ui/product-card"
import { IProduct } from "@/type"

export default async function SearchPage({ searchParams }: { searchParams: { keyword: string } }) {
  const { keyword } = await searchParams
  const query = {
    keyword,
  }
  const products = await getProductBySearchKey(query)
  return (
    <Container>
      {products?.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 items-center place-self-center justify-center sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-5 lg:gap-x-4 gap-y-6">
        {products?.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            data={product}
          />
        ))}
      </div>
    </Container>
  )
}
