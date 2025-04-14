import { IProduct } from "@/type"
import NoResults from "./ui/no-result"
import ProductCard from "./ui/product-card"

interface ProductListProps {
  title: string
  items: IProduct[]
}
const ProductList: React.FC<ProductListProps> = ({ ...props }) => {
  const { title, items } = props
  return (
    <div className="space-y-4 mt-10">
      <h3 className="font-bold text-xl text-gray-600">{title}</h3>
      {items?.length === 0 && <NoResults />}
      <div className="grid gap-y-6 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-full xl:grid-cols-4 2xl:grid-cols-5 gap-x-2">
        {items?.map((item) => (
          <ProductCard
            key={item?.id}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList
