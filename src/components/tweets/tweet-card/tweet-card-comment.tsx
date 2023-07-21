import { useRef, useState } from "react"

import { useAllComments, useCreateComment } from "@/hooks/comments"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons"

import TweetCardDate from "./tweet-card-date"

interface Props {
  postId: string
  comments: []
}

export default function TweetCardComment({ postId, comments }: Props) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLInputElement>(null)
  const { isLoading: loadingComments, data } = useAllComments(postId)
  const { isLoading, mutate } = useCreateComment()
  const onAddComment = () => {
    if (!contentRef.current?.value.length) return
    mutate({ id: postId, content: contentRef.current?.value })
    setOpen(false)
  }

  if (loadingComments) return null

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <li
        onClick={() => setOpen(true)}
        className="flex cursor-pointer items-center text-teal-500"
      >
        <Icons.message className="mr-2 h-5 w-5" /> {comments.length}
      </li>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments</DialogTitle>
        </DialogHeader>
        <div className="flex w-full items-center space-x-2">
          <Input
            ref={contentRef}
            autoComplete="off"
            placeholder="tweet your replay"
          />
          <Button
            onClick={onAddComment}
            disabled={isLoading}
            variant={"default"}
          >
            Reply
          </Button>
        </div>
        <DialogFooter>
          <ScrollArea className="h-[200px] w-full">
            {comments.map((d: any) => (
              <div className="space-y-4 py-4 border-b last:border-b-0">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={d.user.image} alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h2 className="font-semibold">{d.user.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      <TweetCardDate published={d.published} /> - 15.32M views
                    </p>
                  </div>
                </div>
                <p className="text-sm text-foreground">{d.content}</p>
              </div>
            ))}
          </ScrollArea>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
