import Container from "@/components/ui/container"
import Link from "next/link"
import MainNav from "./main-nav"
import { getCategorys } from "@/actions/getCategorys"
import NavbarActions from "./nav-bar-actions"
const Navbar = async () => {
  const data = await getCategorys()
  return (
    <Container>
      <div className="h-[76px] flex items-center gap-x-2 w-full">
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Store
        </Link>
        <MainNav data={data} />
        <NavbarActions />
      </div>
    </Container>
  )
}

export default Navbar
