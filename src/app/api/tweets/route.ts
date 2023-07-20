import { NextResponse } from "next/server"

import { prisma } from "@/lib/db"

export async function GET(request: Request) {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}
