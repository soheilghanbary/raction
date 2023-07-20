"use client"

import { useState } from "react"

import { Dialog, DialogContent } from "@/components/ui/dialog"

import TEditor from "../editor"
import { Button } from "../ui/button"

export default function CreateTweet() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button
        variant={"colored"}
        size="xl"
        className="mt-8 w-full rounded-full"
        onClick={() => setIsOpen(true)}
      >
        Create Tweet
      </Button>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <TEditor onClose={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  )
}
