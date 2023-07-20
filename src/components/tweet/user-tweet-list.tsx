import { getAllUserPosts } from "@/actions/post"

import UserTweet from "./user-tweet"

export default async function UserTweetList() {
  const posts = await getAllUserPosts()
  return (
    <>
      {posts.map((post) => (
        <UserTweet key={post.id} {...post} />
      ))}
    </>
  )
}
