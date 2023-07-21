import TEditor from "@/components/editor"
import TweetList from "@/components/tweets/tweet-list"

export default function HomePage() {
  return (
    <>
      <div className="sticky top-0 z-50 -mt-4 h-16 border bg-background p-4">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>
      <div className="border-x p-4">
        <TEditor />
      </div>
      <TweetList role={"all"} />
    </>
  )
}
