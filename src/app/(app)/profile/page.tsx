import { getUser } from "@/actions/post"
import { CalendarDays, Link2, MapPin } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserLikes from "@/components/tweet/user-likes"
import UserTweetList from "@/components/tweet/user-tweet-list"

import EditProfile from "./edit-profile"

export default async function ProfilePage() {
  const user = await getUser()
  return (
    <div className="mt-4">
      <div className="flex items-center gap-10">
        <img src={user?.image} className="h-28 w-28 rounded-full" />
        <div>
          <h2 className="text-lg font-medium">{user?.name}</h2>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>
      <EditProfile />
      <p className="my-2">Full Stack Web Developer from IRAN</p>
      <ul className="flex space-x-4 text-sm text-muted-foreground">
        <li className="flex items-center">
          <MapPin className="mr-1.5 h-4 w-4" /> Paris
        </li>
        <li className="flex items-center">
          <Link2 className="mr-1.5 h-4 w-4" />{" "}
          <span className="text-indigo-500">soheil.ir</span>
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
          <UserTweetList />
        </TabsContent>
        <TabsContent value="Likes">
          <UserLikes />
        </TabsContent>
        <TabsContent value="Replise">replise tabs.</TabsContent>
        <TabsContent value="Saved">saved tabs.</TabsContent>
        <TabsContent value="Bookmarks">bookmarks tabs.</TabsContent>
      </Tabs>
    </div>
  )
}
