import { getAllUserLikes, getAllUserPosts } from "@/actions/post"

import UserTweet from "./user-tweet"

export default async function UserLikes() {
  const posts = await getAllUserLikes()
  console.log(posts)
  return (
    <>
      {/* {tweets.map((post) => (
        <UserTweet key={post.id} {...post} />
      ))} */}
    </>
  )
}
