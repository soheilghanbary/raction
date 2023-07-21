import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

// get user details
export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`/api/users`)
      return await res.json()
    },
  })
}

// update user
export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["user_update"],
    mutationFn: async (user: any) => {
      const res = await fetch(`/api/users`, {
        method: "PUT",
        body: JSON.stringify(user),
      })
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}

// update user image profile or avatar
export const useImageUpdate = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["user_image"],
    mutationFn: async (path: string) => {
      const res = await fetch(`/api/users?image=${path}`)
      return await res.json()
    },
    onSuccess: () => queryClient.invalidateQueries(),
  })
}
