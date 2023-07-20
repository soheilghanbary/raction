"use client"

import { useTransition } from "react"
import { toggleLike } from "@/actions/post"
import { HeartIcon } from "lucide-react"

interface Props {
  likes: any[]
  liked: boolean | any
  postId: string
}

export default function HeartButton({ postId, likes, liked }: Props) {
  const [isPending, startTransition] = useTransition()
  const onToggleLike = () =>
    startTransition(async () => {
      toggleLike(postId)
    })
  return (
    <li
      className="flex cursor-pointer select-none items-center text-pink-500 transition active:scale-90"
      onClick={onToggleLike}
    >
      <HeartIcon
        className={`mr-2 h-5 w-5 ${
          liked ? "cursor-pointer fill-pink-500" : ""
        }`}
      />{" "}
      {likes.length}
    </li>
  )
}
