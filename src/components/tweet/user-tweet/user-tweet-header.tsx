import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import UserTweetActions from "./user-tweet-actions"
import UserTweetDate from "./user-tweet-date"

interface Props {
  id: string
  image: string
  name: string
  published: Date
}

export default function UserTweetHeader({ id, image, name, published }: Props) {
  return (
    <div className="mb-4 flex w-full items-center justify-between space-x-4">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="flex flex-col">
          <span className="flex items-center space-x-1 font-medium">
            <span>{name}</span>
            <span className="text-muted-foreground">-</span>
            <span className="text-sm text-muted-foreground">
              <UserTweetDate published={published} />
            </span>
          </span>
          <span className="text-sm text-muted-foreground">@soli_ghanbary</span>
        </h2>
      </div>
      <UserTweetActions postId={id} />
    </div>
  )
}
