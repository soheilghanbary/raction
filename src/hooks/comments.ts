import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

export const useAllComments = (id: string) => {
  return useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`/api/comments?id=${id}`)
      return await res.json()
    },
  })
}

export const useCreateComment = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["comments"],
    mutationFn: async ({ id, content }: { id: string; content: string }) => {
      const res = await fetch(`/api/comments?id=${id}`, {
        method: "POST",
        body: JSON.stringify(content),
      })
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}
