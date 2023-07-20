import { ReactNode } from "react"

import { ThemeProvider } from "../theme-provider"
import SiteFooter from "./site-footer"

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <div className="container mx-auto mb-4 mt-2 flex-1">{children}</div>
        <SiteFooter />
      </div>
    </ThemeProvider>
  )
}
