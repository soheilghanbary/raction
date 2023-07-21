import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

import { TweetCardProps } from "@/types/tweet"

export const useTweets = (role: "user" | "all") => {
  return useQuery<TweetCardProps[]>({
    queryKey: ["tweets", role],
    queryFn: async () => {
      const res = await fetch(`/api/tweets?role=${role}`)
      return await res.json()
    },
  })
}

export const useCheckLiked = (id: string) => {
  return useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await fetch(`/api/liked?id=${id}`)
      return await res.json()
    },
  })
}

export const useToggleLike = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["tweets"],
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/liked?id=${id}`, {
        method: "POST",
      })
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}

export const useDeleteTweet = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["tweets"],
    mutationFn: async (id: string) => {
      const res = await fetch(`/api/tweets?id=${id}`, {
        method: "DELETE",
      })
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}

export const useCreateTweet = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["tweet"],
    mutationFn: async (body: string) => {
      const res = await fetch(`/api/tweets`, {
        method: "POST",
        body: JSON.stringify(body),
      })
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}
