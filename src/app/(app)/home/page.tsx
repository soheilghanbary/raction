import TEditor from "@/components/editor"
import TweetList from "@/components/tweets/tweet-list"

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-50 h-20 border-b bg-black/60 p-4 backdrop-blur-md">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>
      <div className="border-b p-4">
        <TEditor />
      </div>
      <TweetList role={"all"} />
    </>
  )
}
