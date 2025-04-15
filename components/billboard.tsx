// import { IBillboard } from "@/type"
import Image from "next/image"
import banner from "../public/banner.png"
// interface BillboardProps {
//   data: IBillboard | undefined
// }

const BillBoard: React.FC = () => {
  // if (!data) return null
  return (
    <div>
      {/* <div className="animate-[bounce_2s_ease-in-out_infinite] bg-red-700 text-white w-max p-4 rounded-xl float-right relative right-50 z-100 hover:cursor-pointer">
        Sale
      </div> */}
      <div className="relative h-64 w-2/3 mx-auto aspect-video rounded-3xl overflow-hidden ">
        <Image
          src={banner}
          alt="billboard Image"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
    </div>
  )
}

export default BillBoard
