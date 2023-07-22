import { NextResponse as res } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

export async function GET(req: Request) {
  const userId = await getUserSession()
  const { searchParams } = new URL(req.url)
  const role = searchParams.get("role") as "user" | "all"
  if (role === "all") {
    const posts = await prisma.post.findMany({
      include: {
        user: true,
        likes: true,
        comments: { include: { user: true } },
      },
    })
    return res.json(posts.reverse())
  }
  if (role === "user") {
    const posts = await prisma.post.findMany({
      where: { userId },
      include: {
        user: true,
        likes: true,
        comments: { include: { user: true } },
      },
    })
    return res.json(posts.reverse())
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const userId = await getUserSession()
  await prisma.post.create({ data: { body, userId } })
  return res.json({ msg: "created" })
}

export async function DELETE(req: Request) {
  const userId = await getUserSession()
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("id") as string
  await prisma.comment.deleteMany({ where: { postId } })
  await prisma.like.deleteMany({ where: { postId } })
  await prisma.post.delete({ where: { id: postId } })
  return res.json({ msg: "tweet deleted!" })
}
