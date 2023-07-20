"use client"

import { useQuery } from "@tanstack/react-query"

import UserTweet from "@/components/tweet/user-tweet"

export default function TweetList() {
  const { data, isLoading } = useQuery({
    queryKey: ["tweets"],
    queryFn: async () => {
      const res = await fetch("/api/tweets")
      const data = await await res.json()
      return data
    },
  })

  if (isLoading) return <p>loading...</p>

  return (
    <div>
      <div className="space-y-4">
        {data?.reverse().map((post) => <UserTweet key={post.id} {...post} />)}
      </div>
    </div>
  )
}
