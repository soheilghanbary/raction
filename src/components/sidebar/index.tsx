import CreateTweet from "./create-tweet"
import SidebarBody from "./side-body"
import SidebarHeader from "./side-header"

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-64 border-r p-4">
      <SidebarHeader />
      <SidebarBody />
      <CreateTweet />
    </div>
  )
}

export default Sidebar
