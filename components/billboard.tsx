import { IBillboard } from "@/type"
import Image from "next/image"

interface BillboardProps {
  data: IBillboard | undefined
}

const BillBoard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) return null
  return (
    // <div className="h-64 w-2/3 mx-auto rounded-xl p-3 border border-gray-400 aspect-video">
    //   <div
    //     className="relative rounded-xl overflow-hidden bg-cover mx-auto object-fill"
    //     style={{ backgroundImage: `url(${data?.imageUrl})` }}
    //   >
    //     <div className="h-full w-full flex flex-col justify-center item-center text-center gap-y-8">
    //       <div className="font-bold text-3xl text-gray-500">{data?.label}</div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative h-64 w-2/3 mx-auto aspect-video rounded-3xl overflow-hidden ">
      <Image
        src={data?.imageUrl}
        alt="billboard Image"
        sizes="100"
        fill
        priority
        className="object-cover object-center"
      />
    </div>
  )
}

export default BillBoard
