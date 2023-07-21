import { BarChart2, Code2, MoreHorizontal, Pin, Trash2 } from "lucide-react"
import { useSession } from "next-auth/react"

import { useDeleteTweet } from "@/hooks/tweets"
import { buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Props {
  postId: string
  userId: string
}

export default function TweetCardActions({ postId, userId }: Props) {
  const { mutate } = useDeleteTweet()
  const session = useSession()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={buttonVariants({ variant: "ghost", size: "icon" })}>
          <MoreHorizontal className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-1 text-sm">
        {session.data?.user?.id === userId ? (
          <DropdownMenuItem
            onSelect={() => mutate(postId)}
            className="font-semibold text-pink-500"
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete Tweet
          </DropdownMenuItem>
        ) : (
          ""
        )}
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
