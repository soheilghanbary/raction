"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/hooks/use-sidebar"

import CreateTweet from "./create-tweet"
import SidebarBody from "./side-body"
import SidebarHeader from "./side-header"
import { sidebarStyles } from "./styles"

const Sidebar = () => {
  const { open, onClose } = useSidebar()
  return (
    <>
      <div
        className={cn(
          sidebarStyles.base,
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <SidebarHeader />
        <SidebarBody />
        <CreateTweet />
      </div>
      <div
        onClick={onClose}
        className={cn(
          "fixed lg:hidden top-0 left-0 bg-background/90 backdrop-blur z-[80] w-full h-full duration-300",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      ></div>
    </>
  )
}

export default Sidebar
