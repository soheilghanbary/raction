import { checkUserLikedPost } from "@/actions/post"
import { BarChart2, BookmarkIcon, MessageCircle } from "lucide-react"

import HeartButton from "./hear-button"

interface Props {
  postId: string
  views: number
}

export default async function UserTweetFooter({ postId, views }: Props) {
  const { liked, likes } = await checkUserLikedPost(postId)
  return (
    <ul className="flex items-center justify-center gap-10 text-sm">
      <HeartButton postId={postId} likes={likes} liked={liked} />
      <li className="flex items-center text-teal-500">
        <MessageCircle className="mr-2 h-5 w-5" /> 240
      </li>
      <li className="flex items-center text-sky-500">
        <BarChart2 className="mr-2 h-5 w-5" /> {views}
      </li>
    </ul>
  )
}
