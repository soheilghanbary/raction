import TEditor from "@/components/editor"
import SiteHeader from "@/components/header"
import TweetList from "@/components/tweets/tweet-list"

export default function HomePage() {
  return (
    <>
      <SiteHeader title="Home" />
      <div className="border-b p-4">
        <TEditor />
      </div>
      <TweetList role={"all"} />
    </>
  )
}
