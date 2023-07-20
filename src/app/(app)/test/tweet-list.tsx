"use client"

import { useQuery } from "@tanstack/react-query"

import UserTweet from "@/components/tweet/user-tweet"

export default function TweetList() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("/api/tweets")
      const tweets = await res.json()
      return tweets
    },
  })

  if (isLoading) return <p>loading...</p>

  return (
    <>
      {data.reverse().map((post) => (
        // <UserTweet key={post.id} {...post} />
        <p>{post.id}</p>
      ))}
    </>
  )
}
