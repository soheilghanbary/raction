import Link from "next/link"

import { cn } from "@/lib/utils"

import { Button, buttonVariants } from "../ui/button"
import SidebarBody from "./side-body"

const Sidebar = () => {
  return (
    <div className="sticky top-0 min-h-[600px] w-56">
      <SidebarBody />
      <Link
        href={"/create"}
        className={cn(
          buttonVariants({ size: "lg", variant: "default" }),
          "mt-8 w-full"
        )}
      >
        Tweet
      </Link>
    </div>
  )
}

export default Sidebar
