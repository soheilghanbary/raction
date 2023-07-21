import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import TweetCardActions from "./tweet-card-actions"
import TweetCardDate from "./tweet-card-date"

interface Props {
  id: string
  userId: string
  published: Date
  user: {
    name: string
    image: string
  }
}

export default function TweetCardHeader({
  id,
  userId,
  published,
  user: { name, image },
}: Props) {
  return (
    <section className="mb-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-xs text-muted-foreground">
            <TweetCardDate published={published} /> - 15.32M views
          </p>
        </div>
      </div>
      <TweetCardActions userId={userId} postId={id} />
    </section>
  )
}
