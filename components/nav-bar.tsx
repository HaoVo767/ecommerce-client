import Container from "@/components/ui/container"
import Link from "next/link"
import MainNav from "./main-nav"
import { getCategorys } from "@/actions/getCategorys"
import NavbarActions from "./nav-bar-actions"
import Search from "./search"
const Navbar = async () => {
  const data = await getCategorys()
  return (
    <Container>
      <div className="relative mt-2 h-[76px] flex md:justify-between gap-y-2 items-center gap-x-2 w-full">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Store
        </Link>
        <MainNav data={data} />
        <div className="hidden md:block">
          <Search />
        </div>
        <NavbarActions />
      </div>
      <div className="block md:hidden mb-6">
        <Search />
      </div>
    </Container>
  )
}

export default Navbar
