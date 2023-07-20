import { ReactNode } from "react"

import ASide from "@/components/aside"
import QueryProvider from "@/components/providers/query-provider"
import Sidebar from "@/components/sidebar"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-5">{children}</div>
        <div className="col-span-3">
          <ASide />
        </div>
      </div>
    </QueryProvider>
  )
}
