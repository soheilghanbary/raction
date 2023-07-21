"use client"

import { useRef, useState } from "react"
import { User } from "@prisma/client"

import { useUpdateUser } from "@/hooks/user"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Uploader } from "./uploader"

export default function EditProfile({
  name,
  bio,
  website,
  location,
  image,
}: User) {
  const [open, setOpen] = useState(false)
  const { mutate, isLoading } = useUpdateUser()
  const nameRef = useRef<HTMLInputElement>(null)
  const bioRef = useRef<HTMLTextAreaElement>(null)
  const websiteRef = useRef<HTMLInputElement>(null)
  const locationRef = useRef<HTMLInputElement>(null)

  const onUpdate = () => {
    const user = {
      name: nameRef.current?.value,
      bio: bioRef.current?.value,
      website: websiteRef.current?.value,
      location: locationRef.current?.value,
    }
    mutate(user)
    setOpen(false)
  }

  return (
    <div className="my-4">
      <Button onClick={() => setOpen(true)} variant={"outline"} size={"sm"}>
        Edit Profile
      </Button>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <Uploader image={image as string} />
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" ref={nameRef} defaultValue={name as string} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" ref={bioRef} defaultValue={bio as string} />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              ref={locationRef}
              defaultValue={location as string}
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              ref={websiteRef}
              defaultValue={website as string}
            />
          </div>
          <DialogFooter>
            <Button
              rounded
              disabled={isLoading}
              variant={"default"}
              onClick={onUpdate}
            >
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
