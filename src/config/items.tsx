import { SidebarItemProps } from "@/types/sidebar"
import { Icons } from "@/components/icons"

export const sidebarItems: SidebarItemProps[] = [
  {
    title: "Home",
    href: "/home",
    icon: Icons.home,
  },
  {
    title: "Explore",
    href: "/explore",
    icon: Icons.atom,
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Icons.bell,
  },
  {
    title: "Messages",
    href: "/messages",
    icon: Icons.mail,
  },
  {
    title: "Bookmarks",
    href: "/bookmarks",
    icon: Icons.saved,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: Icons.user,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Icons.settings,
  },
]
