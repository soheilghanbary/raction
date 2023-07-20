import CreateTweet from "./create-tweet"
import SidebarBody from "./side-body"
import SidebarHeader from "./side-header"

const Sidebar = () => {
  return (
    <div className="sticky top-4 w-56">
      <SidebarHeader />
      <SidebarBody />
      <CreateTweet />
    </div>
  )
}

export default Sidebar
