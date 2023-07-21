import { NextResponse as res } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("id") as string
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { user: true },
  })
  return res.json(comments.reverse())
}

export async function POST(req: Request) {
  const content = await req.json()
  const userId = await getUserSession()
  const { searchParams } = new URL(req.url)
  const postId = searchParams.get("id") as string
  await prisma.comment.create({ data: { userId, postId, content } })
  return res.json({ msg: "yeah " })
}
