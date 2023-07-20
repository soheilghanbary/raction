import { getAllTweets } from "@/actions/post"
import { dehydrate } from "@tanstack/react-query"

import getQueryClient from "@/lib/get-query-client"
import ReactQueryHydrate from "@/components/providers/hydrate-client"

import TweetList from "./tweet-list"

export default async function TestPage() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["tweets"],
    queryFn: getAllTweets,
  })
  const dehydrateState = dehydrate(queryClient)
  return (
    <ReactQueryHydrate state={dehydrateState}>
      <TweetList />
    </ReactQueryHydrate>
  )
}
