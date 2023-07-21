"use client"

import { useTweets } from "@/hooks/tweets"

import TweetCard from "./tweet-card"

export default function TweetList({ role }: { role: "user" | "all" }) {
  const { data, isLoading } = useTweets(role)
  if (isLoading) return <p>loading...</p>
  return <div>{data?.map((t) => <TweetCard key={t.id} {...t} />)}</div>
}
