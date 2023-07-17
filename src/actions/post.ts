"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"

import { prisma } from "@/lib/db"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

// get all user posts
export async function getAllUserPosts() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  const posts = await prisma.post.findMany({
    where: { userId },
    include: { user: true, likes: true, comments: true },
  })
  return posts.reverse()
}

// create a new tweet
export async function createTweet(body: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  await prisma.post.create({ data: { body, userId } })
  revalidatePath("/profile")
}

// like a tweet
export async function likeTweet(postId: number) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  await prisma.like.create({ data: { userId, postId } })
  revalidatePath("/profile")
}

// dislike tweet
export async function dislikeTweet(postId: number) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  await prisma.like.deleteMany({ where: { userId, postId } })
  revalidatePath("/profile")
}
