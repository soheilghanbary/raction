import { Button } from "../ui/button"
import SidebarBody from "./side-body"

const Sidebar = () => {
  return (
    <div className="sticky top-0 min-h-[600px] w-56">
      <SidebarBody />
      <Button className="mt-8 w-full" variant={"default"} size={"default"}>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar
