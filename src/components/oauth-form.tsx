"use client"

import { useState } from "react"
import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function OAuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const onLogin = () => {
    setIsLoading(true)
    signIn("github")
  }
  return (
    <Button
      onClick={onLogin}
      disabled={isLoading}
      variant={isLoading ? "outline" : "default"}
      className="w-full"
    >
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <GithubIcon className="mr-2 h-4 w-4" />
      )}
      Sign In with Github
    </Button>
  )
}
