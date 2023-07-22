"use client"

import Image from "next/image"
import { CalendarDays, Link2, MapPin } from "lucide-react"

import { useUser } from "@/hooks/user"

import EditProfile from "./edit-profile"
import ProfileHeaderSkeleton from "./profile-header-skeleton"

export default function ProfileHeader() {
  const { data: user, isLoading } = useUser()
  if (isLoading) return <ProfileHeaderSkeleton />
  return (
    <div className="m-4">
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
      <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
    </div>
  )
}
