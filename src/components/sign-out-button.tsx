"use client"

import { signOut } from "next-auth/react"

import { Icons } from "@/components/icons"

import { Button } from "./ui/button"

export default function SignOutButton() {
  return (
    <Button variant={"destructive"} onClick={() => signOut()}>
      <Icons.logout className="mr-2 h-4 w-4" />
      <span>Sign Out</span>
    </Button>
  )
}
