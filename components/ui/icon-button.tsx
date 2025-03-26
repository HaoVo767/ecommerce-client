import { cn } from "@/lib/utils"

interface IconButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  icon: React.ReactNode
}
const IconButton: React.FC<IconButtonProps> = ({ onClick, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex justify-center items-center bg-white shadow-md p-2 hover:scale-110 hover:cursor-pointer transition",
        className
      )}
    >
      {icon}
    </button>
  )
}

export default IconButton
