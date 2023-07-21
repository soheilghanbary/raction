"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import type { FileWithPath } from "react-dropzone"
import { toast } from "sonner"

import { useUploadThing } from "@/lib/uploadthing"
import { cn } from "@/lib/utils"
import { useImageUpdate } from "@/hooks/user"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Uploader({ image }: { image: string }) {
  const [path, setPath] = useState(image)
  const [loading, setLoading] = useState(false)
  const [file, setFile] = useState<File[]>()
  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFile(acceptedFiles)
    setPath(URL.createObjectURL(acceptedFiles[0]))
  }, [])

  const { mutate } = useImageUpdate()

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {},
  })

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res: any) => {
      mutate(res[0].fileUrl)
      toast.success("uploaded successfully!")
      setLoading(false)
    },
    onUploadError: () => {
      alert("error occurred while uploading")
    },
  })

  return (
    <div className="flex items-center gap-8">
      {path ? (
        <div
          {...getRootProps()}
          className="mb-2 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed bg-secondary text-muted-foreground"
        >
          <input {...getInputProps()} />
          <img
            src={path}
            className={cn(
              "h-full w-full rounded-full object-cover",
              loading ? "animate-pulse" : ""
            )}
          />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="mb-2 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed bg-secondary text-muted-foreground"
        >
          <input {...getInputProps()} />
          <Icons.image className="h-6 w-6" />
        </div>
      )}
      {file ? (
        <Button
          disabled={loading}
          onClick={() => {
            setLoading(true)
            startUpload(file)
          }}
          variant={"default"}
          className={loading ? "animate-pulse" : ""}
        >
          {loading ? "Uploading..." : "Upload"}
        </Button>
      ) : (
        ""
      )}
    </div>
  )
}
