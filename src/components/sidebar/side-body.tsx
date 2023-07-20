import { sidebarItems } from "@/config/items"

import SidebarItem from "./side-item"

const SidebarBody = () => {
  return (
    <ul className="space-y-3">
      {sidebarItems.map((item) => (
        <SidebarItem key={item.title} {...item} />
      ))}
    </ul>
  )
}

export default SidebarBody
