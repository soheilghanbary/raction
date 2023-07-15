"use client"

import {
  Atom,
  BellIcon,
  BookmarkIcon,
  Building,
  GraduationCap,
  HomeIcon,
  MailIcon,
  Rss,
  SearchIcon,
  Settings2,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import SidebarItem from "./side-item"

const SidebarBody = () => {
  return (
    <ul className="space-y-2">
      <SidebarItem title="Home" icon={HomeIcon} href="/" />
      <SidebarItem title="Explore" icon={SearchIcon} href="/explore" />
      <SidebarItem
        title="Notifications"
        icon={BellIcon}
        href="/notifications"
      />
      <SidebarItem title="Messages" icon={MailIcon} href="/messages" />
      <SidebarItem title="Bookmarks" icon={BookmarkIcon} href="/bookmarks" />
      <SidebarItem title="Profile" icon={UserIcon} href="/profile" />
      <SidebarItem title="Settings" icon={SettingsIcon} href="/settings" />
    </ul>
  )
}

export default SidebarBody
