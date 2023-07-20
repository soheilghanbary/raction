"use client"

import { useTransition } from "react"
import { deleteTweet } from "@/actions/post"
import { BarChart2, Code2, MoreHorizontal, Pin, Trash2 } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props {
  postId: string
}

export default function UserTweetActions({ postId }: Props) {
  const [isPending, startTransition] = useTransition()
  const onDeleteTweet = () => {
    startTransition(async () => {
      await deleteTweet(postId)
    })
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={buttonVariants({ variant: "ghost", size: "icon" })}>
          <MoreHorizontal className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1 text-sm">
        <DropdownMenuItem
          className="font-semibold text-pink-500"
          onSelect={onDeleteTweet}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          {isPending ? "Deleting..." : "Delete Tweet"}
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
  )
}
