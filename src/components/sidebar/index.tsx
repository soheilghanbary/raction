import CreateTweet from "../tweet/create-tweet"
import SidebarBody from "./side-body"

const Sidebar = () => {
  return (
    <div className="sticky top-0 min-h-[600px] w-56">
      <SidebarBody />
      <CreateTweet />
    </div>
  )
}

export default Sidebar
