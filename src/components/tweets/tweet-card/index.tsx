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
  comments,
}: TweetCardProps) {
  return (
    <div className="border-b p-4 first:border-t last:border-y-0">
      <TweetCardHeader
        published={published}
        userId={userId}
        id={id}
        user={user}
      />
      <TweetCardBody body={body} />
      <TweetCardFooter
        comments={comments}
        postId={id}
        likes={likes}
        views={views}
      />
    </div>
  )
}
