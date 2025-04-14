import Link from "next/link"

const Footer = () => {
  return (
    <div className=" w-full bg-blue-900 h-full text-white text-center justify-center items-center">
      <div className="flex justify-around items-center h-full py-4">
        <div className="text-sm font-semibold">© 2025 Store. All rights reserved.</div>
        <div>
          <Link href={"https://github.com/HaoVo767/ecommerce-client"}>View source</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
