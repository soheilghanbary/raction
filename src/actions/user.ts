"use server"

import { revalidatePath } from "next/cache"

import { prisma } from "@/lib/db"
import { getUserSession } from "@/lib/user-session"

// update user
export async function updateUser(user: any) {
  const id = await getUserSession()
  await prisma.user.update({ where: { id }, data: user })
  revalidatePath("/profile")
}
