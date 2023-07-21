import { BarChart2, MessageCircle, Repeat2 } from "lucide-react"

import TweetCardComment from "./tweet-card-comment"
import TweetCardLike from "./tweet-card-like"

interface Props {
  postId: string
  likes: []
  views: number
  comments: []
}

export default function TweetCardFooter({
  postId,
  likes,
  views,
  comments,
}: Props) {
  return (
    <ul className="flex items-center justify-center gap-10 text-sm">
      <TweetCardLike postId={postId} likes={likes} />
      <li className="flex items-center text-sky-500">
        <Repeat2 className="mr-2 h-5 w-5" /> 240
      </li>
      <TweetCardComment comments={comments} postId={postId} />
      <li className="flex items-center text-muted-foreground">
        <BarChart2 className="mr-2 h-5 w-5" /> {views}
      </li>
    </ul>
  )
}
