"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"

// get all tweets
export async function getAllTweets() {
  return await prisma.post.findMany({
    include: { user: true, likes: true, comments: true },
  })
}

// get user with userId
export async function getUser() {
  const session = await getServerSession(authOptions)
  const id = session?.user?.id as string
  return await prisma.user.findFirst({ where: { id } })
}

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
export async function likeTweet(postId: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  await prisma.like.create({ data: { userId, postId } })
  revalidatePath("/profile")
}

// dislike tweet
export async function dislikeTweet(postId: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  await prisma.like.deleteMany({ where: { userId, postId } })
  revalidatePath("/profile")
}

// check user like by post
export async function checkUserLikedPost(postId: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  const likedByMe = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId } },
  })
  const likes = await prisma.like.findMany({ where: { postId } })
  return {
    liked: likedByMe,
    likes,
  }
}

// toggle like
export async function toggleLike(postId: string) {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  const likedByMe = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId } },
  })
  if (likedByMe) {
    // Like exists, delete it
    await prisma.like.delete({
      where: { userId_postId: { userId, postId } },
    })
  } else {
    await prisma.like.create({
      data: {
        postId,
        userId,
      },
    })
  }
  revalidatePath("/profile")
}

// delete a post
export async function deleteTweet(postId: string) {
  await prisma.like.deleteMany({ where: { postId } })
  await prisma.post.delete({ where: { id: postId } })
  revalidatePath("/profile")
}

// increment post view
export async function incrementPostView(postId: string) {
  return await prisma.post.update({
    where: { id: postId },
    data: { views: { increment: 1 } },
  })
}

// get all user likes
export async function getAllUserLikes() {
  const session = await getServerSession(authOptions)
  const userId = session?.user?.id as string
  return await prisma.like.findMany({
    where: { userId },
    include: { user: true, post: true },
  })
}
