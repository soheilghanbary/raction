import TEditor from "@/components/editor"
import TweetList from "@/components/tweets/tweet-list"

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-50 h-20 border-b dark:bg-black/60 bg-white/60 p-4 backdrop-blur">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>
      <div className="border-b p-4">
        <TEditor />
      </div>
      <TweetList role={"all"} />
    </>
  )
}
