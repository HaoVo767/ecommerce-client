import { IBillboard } from "@/type"
import Image from "next/image"

interface BillboardProps {
  data: IBillboard | undefined
}

const BillBoard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) return null
  return (
    <div>
      <div className="animate-[bounce_2s_ease-in-out_infinite] bg-red-700 text-white w-max p-4 rounded-xl float-right relative right-50 z-100 hover:cursor-pointer">
        Sale
      </div>
      <div className="relative h-64 w-2/3 mx-auto aspect-video rounded-3xl overflow-hidden ">
        {data.imageUrl ? (
          <Image
            src={data?.imageUrl}
            alt="billboard Image"
            sizes="100"
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          <div>Billboard</div>
        )}
      </div>
    </div>
  )
}

export default BillBoard
