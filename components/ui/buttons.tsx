import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  size?: {
    default?: "h-9 px-4 py-2"
    sm?: "h-8 rounded-md px-3 text-xs"
    lg?: "h-10 rounded-md px-8"
    icon?: "h-9 w-9"
  }
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        `w-auto
    rounded-full
    bg-black
    border-transparent
    px-5
    py-3
    disabled:opacity-50
    disabled:cursor-not-allowed
    text-white
    text-semibold
    hover:opacity-80
    transition
    cursor-pointer
    `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = "Button"

export default Button
