"use client"

import { useTweets, useUserTweets } from "@/hooks/tweets"

import TweetCard from "./tweet-card"

export default function UserTweets() {
  const { data, isLoading } = useUserTweets()
  if (isLoading) return <p>loading...</p>
  return <div>{data?.map((t) => <TweetCard key={t.id} {...t} />)}</div>
}
