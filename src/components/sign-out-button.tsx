"use client"

import { signOut } from "next-auth/react"

import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

export default function SignOutButton() {
  return (
    <DropdownMenuItem onSelect={() => signOut()}>
      <Icons.logout className="mr-2 h-4 w-4" />
      <span>Sign Out</span>
    </DropdownMenuItem>
  )
}
