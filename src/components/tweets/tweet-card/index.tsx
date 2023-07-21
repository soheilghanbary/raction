import { TweetCardProps } from "@/types/tweet"

import TweetCardBody from "./tweet-card-body"
import TweetCardFooter from "./tweet-card-footer"
import TweetCardHeader from "./tweet-card-header"

export default function TweetCard({
  id,
  user,
  userId,
  body,
  views,
  likes,
  published,
}: TweetCardProps) {
  return (
    <div className="border p-4">
      <TweetCardHeader
        published={published}
        userId={userId}
        id={id}
        user={user}
      />
      <TweetCardBody body={body} />
      <TweetCardFooter postId={id} likes={likes} views={views} />
    </div>
  )
}
