"use client"

import Image from "next/image"
import { CalendarDays, Link2, MapPin } from "lucide-react"
import { toast, Toaster } from "sonner"

import { useUser } from "@/hooks/user"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TweetList from "@/components/tweets/tweet-list"

import EditProfile from "./edit-profile"

export default function ProfilePage() {
  const { data: user, isLoading } = useUser()
  if (isLoading) return null
  return (
    <>
      <div className="mt-4">
        <div className="flex items-center gap-8">
          <div className="relative h-24 w-24 rounded-full">
            <Image
              fill
              src={user?.image as string}
              alt={user?.name as string}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-medium">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <EditProfile {...user} />
        <p className="my-2">{user?.bio}</p>
        <ul className="flex space-x-4 text-sm text-muted-foreground">
          <li className="flex items-center">
            <MapPin className="mr-1.5 h-4 w-4" /> {user?.location}
          </li>
          <li className="flex items-center">
            <Link2 className="mr-1.5 h-4 w-4" />{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-indigo-500"
            >
              {user?.website}
            </a>
          </li>
          <li className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" /> Joined Sep 2020
          </li>
        </ul>
        <hr className="my-4" />
        <ul className="flex space-x-4 text-sm">
          <li>
            65 <span className="text-muted-foreground">Following</span>
          </li>
          <li>
            24 <span className="text-muted-foreground">Followers</span>
          </li>
        </ul>
        <Tabs defaultValue="Tweets" className="mt-4">
          <TabsList>
            <TabsTrigger value="Tweets">Tweets</TabsTrigger>
            <TabsTrigger value="Likes">Likes</TabsTrigger>
            <TabsTrigger value="Replise">Replise</TabsTrigger>
            <TabsTrigger value="Saved">Saved</TabsTrigger>
            <TabsTrigger value="Bookmarks">Bookmarks</TabsTrigger>
          </TabsList>
          <TabsContent value="Tweets" className="space-y-4">
            <TweetList role="user" />
          </TabsContent>
          <TabsContent value="Likes">likes page</TabsContent>
          <TabsContent value="Replise">replise tabs.</TabsContent>
          <TabsContent value="Saved">saved tabs.</TabsContent>
          <TabsContent value="Bookmarks">bookmarks tabs.</TabsContent>
        </Tabs>
      </div>
      <Toaster richColors />
    </>
  )
}
