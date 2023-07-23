import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/header"
import TweetList from "@/components/tweets/tweet-list"

import ProfileHeader from "./profile-header"

export default function ProfilePage() {
  return (
    <>
      <SiteHeader title="Profile" />
      <ProfileHeader />
      <Tabs defaultValue="Tweets">
        <TabsList className="mx-4 mb-2">
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
    </>
  )
}
