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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import Line from "@/components/line"

export default function EditProfile() {
  return (
    <div className="my-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            Edit Profile
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="flex items-center justify-center bg-secondary w-24 h-24 rounded-full text-muted-foreground border-2 border-dashed mb-2">
            <Icons.image className="w-6 h-6" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="location">Location</Label>
            <Input id="location" />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="website">Website</Label>
            <Input id="website" />
          </div>
          <DialogFooter>
            <Button rounded variant={"default"}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
