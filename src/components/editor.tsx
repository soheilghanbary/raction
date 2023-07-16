"use client"

import { useState } from "react"
import data from "@emoji-mart/data"
import Picker from "@emoji-mart/react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { SmileIcon } from "lucide-react"
import { useTheme } from "next-themes"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from "./ui/button"

const TEditor = () => {
  const [showEmoji, setShowEmoji] = useState(false)
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  })

  const { theme } = useTheme()

  const handleSelectEmoji = (emoji: { native: string }) => {
    editor?.chain().focus().insertContent(emoji.native).run()
  }

  return (
    <div>
      <EditorContent editor={editor} />
      <hr className="my-4" />
      <Button
        onClick={() => setShowEmoji(!showEmoji)}
        size={"icon"}
        variant={"outline"}
      >
        <SmileIcon className="h-5 w-5" />
      </Button>
      <Popover open={showEmoji}>
        <PopoverContent className="border-0 bg-transparent shadow-none">
          <Picker data={data} onEmojiSelect={handleSelectEmoji} theme={theme} />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default TEditor
