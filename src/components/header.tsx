import Link from "next/link"
import Search from "./search"
import { Button } from "./button"
import { cn } from "@/lib/utils"

const Header = () => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 flex items-center gap-4 justify-between py-5 w-full md:px-10 px-5",
        "text-primary-foreground"
      )}
    >
      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="focus-outline outline-none flex xl:text-[1.5rem] lg:text-[1.4rem] text-[1.3rem] font-bold"
        >
          RemoteH
          <div className="relative inline-flex">
            l
            <span className="bounce absolute top-[-2.5px] left-0 w-[7px] h-[7px] rounded-[100%] bg-accent-green"></span>
          </div>
          ve
        </Link>
        <ul className="flex gap-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/">Find Jobs</Link>
          <Link href="/">Companies</Link>
          <Link href="/">Featured</Link>
          <Link href="/">Why us?</Link>
        </ul>
      </div>
      <ul className="flex items-center gap-4">
        <Search
          placeholder="Search"
          className="w-full bg-transparent max-w-[300px]"
        />
        <Button asChild variant="ghost" className="bg-transparent">
          <Link href="/">Login</Link>
        </Button>
        <Button variant="cta">
          <Link href="/" className="whitespace-nowrap">
            Sign Up
          </Link>
        </Button>
      </ul>
    </header>
  )
}

export default Header
