import Link from "next/link"

import { SidebarItemProps } from "@/types/sidebar"
import { cn } from "@/lib/utils"

const SidebarItem = ({ title, icon, href }: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center rounded-xl border border-transparent p-2 text-foreground/90 transition-colors hover:bg-muted hover:text-foreground"
      )}
    >
      <SidebarIcon icon={icon} />
      <SidebarTitle text={title} />
    </Link>
  )
}

const SidebarTitle = ({ text }: { text: string }) => (
  <h2 className="text-xl">{text}</h2>
)

const SidebarIcon = ({ icon }: { icon: any }) => {
  const Icon = icon
  return <Icon className="mr-4 h-6 w-6" />
}

export default SidebarItem
