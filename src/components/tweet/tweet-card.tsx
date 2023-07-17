"use client"

import { useTransition } from "react"
import { dislikeTweet, likeTweet } from "@/actions/post"
import {
  BarChart2,
  BookmarkIcon,
  Code2,
  HeartIcon,
  MessageCircle,
  MoreHorizontal,
  Pin,
  Trash2,
} from "lucide-react"

import { TweetCardProps } from "@/types/tweet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { buttonVariants } from "../ui/button"

export default function TweetCard({
  id,
  body,
  likes,
  comments,
  user: { name, email, image },
}: TweetCardProps) {
  const [isPending, startTransition] = useTransition()

  const onLikeTweet = () => startTransition(async () => await likeTweet(id))
  const onDisLikeTweet = () =>
    startTransition(async () => await dislikeTweet(id))

  return (
    <div className="max-w-xl rounded-xl border p-4">
      <div className="mb-4 flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="space-x-2">
          <span className="font-medium">{name}</span>
          <span className="text-sm text-muted-foreground">
            @soli_ghanbary - 23h
          </span>
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <MoreHorizontal className="h-4 w-4" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="space-y-1 text-sm">
            <DropdownMenuItem className="font-semibold text-pink-500">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Tweet
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pin className="mr-2 h-4 w-4" />
              Pin to Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Code2 className="mr-2 h-4 w-4" />
              Embed Tweet
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BarChart2 className="mr-2 h-4 w-4" />
              Activity
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr className="my-4" />
      <ul className="flex items-center justify-center gap-10 text-sm">
        <li className="flex items-center text-pink-500" onClick={onLikeTweet}>
          <HeartIcon className="mr-2 h-5 w-5" /> {likes.length}
        </li>
        {/* <li
          className="flex items-center text-pink-500"
          onClick={onDisLikeTweet}
        >
          <HeartIcon className="mr-2 h-5 w-5" /> dislike
        </li> */}
        <li className="flex items-center text-sky-500">
          <BookmarkIcon className="mr-2 h-5 w-5" /> 340
        </li>
        <li className="flex items-center text-teal-500">
          <MessageCircle className="mr-2 h-5 w-5" /> {comments.length}
        </li>
        <li className="flex items-center text-muted-foreground">
          <BarChart2 className="mr-2 h-5 w-5" /> 14.34K
        </li>
      </ul>
    </div>
  )
}
