import { NextResponse as res } from "next/server"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

// get user details
export async function GET(req: Request) {
  const id = await getUserSession()
  const { searchParams } = new URL(req.url)
  const imagePath = searchParams.get("image")

  if (imagePath) {
    const updatedImage = await prisma.user.update({
      where: { id },
      data: { image: imagePath },
    })
    return res.json(updatedImage.image)
  }

  const user = await prisma.user.findFirst({ where: { id } })
  return res.json(user)
}

// update user details
export async function PUT(req: Request) {
  const body = await req.json()
  const id = await getUserSession()
  await prisma.user.update({ where: { id }, data: body })
  return res.json({ msg: "user has been updated!" })
}
