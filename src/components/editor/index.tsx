"use client"

import { useCallback } from "react"
import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Mention from "@tiptap/extension-mention"
import Placeholder from "@tiptap/extension-placeholder"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { BoldIcon, ImageIcon, ItalicIcon, LinkIcon } from "lucide-react"

import { useCreateTweet } from "@/hooks/tweets"
import { Button } from "@/components/ui/button"

const TEditor = ({ onClose }: { onClose?: () => void }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "rounded-2xl my-3",
        },
      }),
      Placeholder.configure({
        placeholder: "what is happening?!",
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          class: "underline",
          target: "_blank",
        },
      }),
      Mention.configure({
        HTMLAttributes: {
          class: "font-semibold text-indigo-500",
        },
      }),
    ],
    autofocus: true,
    content: "",
  })

  const addImage = useCallback(() => {
    const url = window.prompt("URL")

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run()
    }
  }, [editor])

  const setLink = useCallback(() => {
    const previousUrl = editor?.getAttributes("link").href
    const url = window.prompt("URL", previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run()

      return
    }

    // update link
    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }, [editor])

  const { mutate, isLoading } = useCreateTweet()

  const onCreate = () => {
    mutate(editor?.getHTML() as string)
    onClose && onClose()
    editor?.commands.clearContent()
  }

  if (!editor) {
    return <p>ready...</p>
  }

  return (
    <>
      <EditorContent className="min-h-[120px]" editor={editor} />
      <hr className="my-2.5" />
      <div className="flex items-center justify-between">
        <div className="space-x-2">
          <Button onClick={addImage} size={"icon"} variant={"ghost"}>
            <ImageIcon className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            size={"icon"}
            variant={editor.isActive("bold") ? "secondary" : "ghost"}
          >
            <BoldIcon className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            size={"icon"}
            variant={editor.isActive("italic") ? "secondary" : "ghost"}
          >
            <ItalicIcon className="h-4 w-4" />
          </Button>
          <Button
            onClick={setLink}
            size={"icon"}
            variant={editor.isActive("link") ? "secondary" : "ghost"}
          >
            <LinkIcon className="h-4 w-4" />
          </Button>
        </div>
        <Button
          disabled={isLoading}
          variant={"default"}
          size={"sm"}
          onClick={onCreate}
        >
          {isLoading ? "Tweeting" : "Tweet"}
        </Button>
      </div>
    </>
  )
}

export default TEditor
