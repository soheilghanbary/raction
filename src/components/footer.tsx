import Link from "next/link"

import { siteConfig, siteFooter } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { ThemeToggle } from "./theme-toggle"
import { buttonVariants } from "./ui/button"

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <section className="container mx-auto flex items-center justify-between py-2">
        <p className="text-sm text-muted-foreground">Built by TonyCore</p>
        <div className="flex items-center space-x-1">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Icons.gitHub className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </section>
    </footer>
  )
}
