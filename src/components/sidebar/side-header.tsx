import Link from "next/link"

import { Icons } from "@/components/icons"

export default function SidebarHeader() {
  return (
    <Link href="/" className="mb-8 flex items-center space-x-2 ml-2">
      <Icons.logo className="h-8 w-8" />
    </Link>
  )
}
