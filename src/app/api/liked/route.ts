import { NextResponse as res } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("id") as string
  const userId = await getUserSession()
  const likedByMe = await prisma.like.findUnique({
    where: { userId_postId: { userId, postId } },
  })
  const likes = await prisma.like.findMany({ where: { postId } })
  return res.json({
    liked: likedByMe ? true : false,
    likes: likes.length,
  })
}

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("id") as string
  const userId = await getUserSession()
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
  const likes = await prisma.like.findMany({ where: { postId } })
  return res.json({ like: likedByMe, likes: likes })
}
