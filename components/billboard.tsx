import { IBillboard } from "@/type"

interface BillboardProps {
  data: IBillboard | undefined
}

const BillBoard: React.FC<BillboardProps> = ({ data }) => {
  if (!data) return null
  return (
    <div className="h-64 w-2/3 mx-auto rounded-xl overflow-hidden p-3 border border-gray-400 aspect-video">
      <div
        className="relative rounded-xl overflow-hidden bg-cover mx-auto "
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex flex-col justify-center item-center text-center gap-y-8">
          <div className="font-bold text-3xl">{data?.label}</div>
        </div>
      </div>
    </div>
  )
}

export default BillBoard
