"use client"
import { useState, useEffect } from "react"
import { formatCurrency } from "@/lib/formatCurency"
import { cn } from "@/lib/utils"

interface FormatCurrencyProps {
  value: number
  className?: string
}
const FormatCurrency: React.FC<FormatCurrencyProps> = ({ value, className }) => {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])

  if (!isMounted) return null

  return (
    <div className={cn("font-semibold text-center justify-center text-gray-700 text-lg", className)}>
      {formatCurrency(value)}
    </div>
  )
}

export default FormatCurrency
