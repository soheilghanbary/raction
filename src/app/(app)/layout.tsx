import { ReactNode } from "react"

import ASide from "@/components/aside"
import QueryProvider from "@/components/providers/query-provider"
import Sidebar from "@/components/sidebar"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 border-x">{children}</div>
        <ASide />
      </div>
    </QueryProvider>
  )
}
