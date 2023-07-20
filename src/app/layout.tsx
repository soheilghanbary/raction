import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import SiteLayout from "@/components/layouts/site-layout"
import AuthProvider from "@/components/providers/auth-provider"

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
          <SiteLayout>{children}</SiteLayout>
        </body>
      </html>
    </AuthProvider>
  )
}
