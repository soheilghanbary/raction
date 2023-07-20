import { TweetCardProps } from "@/types/tweet"

import UserTweetBody from "./user-tweet-body"
import UserTweetFooter from "./user-tweet-footer"
import UserTweetHeader from "./user-tweet-header"

export default async function UserTweet({
  id,
  body,
  published,
  views,
  user: { name, image },
}: TweetCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <UserTweetHeader
        published={published}
        id={id}
        image={image}
        name={name}
      />
      <UserTweetBody body={body} />
      <UserTweetFooter views={views} postId={id} />
    </div>
  )
}
