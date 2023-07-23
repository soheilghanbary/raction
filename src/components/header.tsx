"use client"

import { useSidebar } from "@/hooks/use-sidebar"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function SiteHeader() {
  const { onOpen } = useSidebar()
  return (
    <div>
      <div className="sticky top-0 z-50 h-20 border-b dark:bg-black/60 bg-white/60 p-4 backdrop-blur flex justify-between items-center">
        <Button
          onClick={onOpen}
          variant={"ghost"}
          size={"icon"}
          className="lg:hidden"
        >
          <Icons.menu />
        </Button>
        <h2 className="text-lg font-semibold">Home</h2>
        <div></div>
      </div>
    </div>
  )
}
