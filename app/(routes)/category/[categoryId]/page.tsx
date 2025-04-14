import { getCategory } from "@/actions/getCategorys"
import { getColors } from "@/actions/getColors"
import { getProduct } from "@/actions/getProduct"
import { getSizes } from "@/actions/getSizes"
import BillBoard from "@/components/billboard"
import Container from "@/components/ui/container"
import Filter from "./components/filter"
import NoResults from "@/components/ui/no-result"
import ProductCard from "@/components/ui/product-card"
import { IProduct } from "@/type"
import MobileFiters from "./components/mobile-fiter"

type SearchParams = Promise<{
  [key: string]: string | undefined
}>

async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ categoryId: string }>
  searchParams: SearchParams
}) {
  const { categoryId } = await params
  // const { color, size } = await searchParams
  const search = await searchParams
  const query = {
    category: categoryId,
    color: search?.color,
    size: search?.size,
  }
  const products = await getProduct(query)
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(categoryId)
  const { billboard } = category

  if (JSON.stringify(category) === "{}") return null
  if (!category?.billboard) return null
  return (
    <Container>
      <BillBoard data={billboard} />
      <div className="mt-6 lg:grid lg:grid-cols-5">
        <MobileFiters
          sizes={sizes}
          colors={colors}
        />
        <div className="hidden lg:block lg:col-span-1 justify-self-end">
          {categoryId !== "7622b9d9-39b5-4e8e-89b4-dc8c99ee41ee" && (
            <Filter
              valueKey="size"
              name="Sizes"
              data={sizes}
            />
          )}

          <Filter
            valueKey="color"
            name="Colors"
            data={colors}
          />
        </div>
        <div className="lg:col-span-4">
          {products?.length === 0 && <NoResults />}
          <div className="grid grid-cols-1 items-center place-self-center justify-center sm:grid-cols-2 md:grid-cols-3  2xl:grid-cols-5 lg:gap-x-4 gap-y-6">
            {products?.map((product: IProduct) => (
              <ProductCard
                key={product.id}
                data={product}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CategoryPage
