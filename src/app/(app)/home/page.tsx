import { getAllTweets } from "@/actions/post"

import TEditor from "@/components/editor"
import UserTweet from "@/components/tweet/user-tweet"

export default async function HomePage() {
  const posts = await getAllTweets()
  return (
    <div>
      <div className="sticky top-0 z-50 h-16 rounded-md bg-background p-4 shadow">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>
      <div className="my-2 rounded-lg border p-4 shadow">
        <TEditor />
      </div>
      <div className="space-y-4">
        {posts.reverse().map((post) => (
          <UserTweet key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}
