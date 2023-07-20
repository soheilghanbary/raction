import { redirect } from "next/navigation"
import { getAllTweets } from "@/actions/post"
import { getServerSession } from "next-auth"

import UserTweet from "@/components/tweet/user-tweet"

import { authOptions } from "../api/auth/[...nextauth]/route"

export default async function HomePage() {
  const posts = await getAllTweets()
  const session = await getServerSession(authOptions)
  if (!session) redirect("/login")
  return (
    <div className="space-y-4">
      {posts.reverse().map((post) => (
        <UserTweet key={post.id} {...post} />
      ))}
    </div>
  )
}
