import { cn } from "@/lib/utils"
import { useCheckLiked, useToggleLike } from "@/hooks/tweets"
import { Icons } from "@/components/icons"

interface Props {
  postId: string
  likes: []
}

export default function TweetCardLike({ postId, likes }: Props) {
  const { data, isLoading } = useCheckLiked(postId)
  const { mutate } = useToggleLike()

  if (isLoading) return

  return (
    <li
      className={"flex cursor-pointer select-none items-center text-pink-500"}
      onClick={() => mutate(postId)}
    >
      <Icons.heart
        className={cn("mr-2 h-5 w-5", data.liked ? "fill-pink-500" : "")}
      />
      {likes.length}
    </li>
  )
}
