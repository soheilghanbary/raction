import { ReactNode } from "react"

import Sidebar from "@/components/sidebar"

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-8 pt-2">
      <Sidebar />
      <div className="flex-1">{children}</div>
    </div>
  )
}
