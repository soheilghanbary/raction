import CreateTweet from "./create-tweet"
import SidebarBody from "./side-body"
import SidebarHeader from "./side-header"

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-72 p-4">
      <SidebarHeader />
      <SidebarBody />
      <CreateTweet />
    </div>
  )
}

export default Sidebar
