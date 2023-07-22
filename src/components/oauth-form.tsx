"use client"

import { useState } from "react"
import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function OAuthForm() {
  const [isLoading, setIsLoading] = useState(false)
  const onLogin = (provider: "google" | "github") => {
    setIsLoading(true)
    signIn(provider)
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        onClick={() => onLogin("github")}
        disabled={isLoading}
        variant={isLoading ? "outline" : "default"}
        className="w-full"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GithubIcon className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>
      <Button
        onClick={() => onLogin("google")}
        disabled={isLoading}
        variant={isLoading ? "outline" : "default"}
        className="w-full"
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  )
}
