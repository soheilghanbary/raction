import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import SiteFooter from "@/components/footer"
import AuthProvider from "@/components/providers/auth-provider"
import { ThemeProvider } from "@/components/providers/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AuthProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={"min-h-screen bg-background antialiased"}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container mx-auto my-4 min-h-screen flex-1">
              {children}
            </div>
            <SiteFooter />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
