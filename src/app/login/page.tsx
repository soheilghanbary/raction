import { redirect } from "next/navigation"
import { CommandIcon } from "lucide-react"

import { getUserSession } from "@/lib/user-session"
import OAuthForm from "@/components/oauth-form"

export default async function LoginPage() {
  const userId = await getUserSession()
  if (userId) redirect("/home")
  return (
    <section className="flex h-[90vh] items-center justify-center">
      <div className="w-full max-w-sm space-y-4 text-center">
        <CommandIcon className="mx-auto h-6 w-6" />
        <h1 className="text-center text-2xl font-semibold">
          Create an account
        </h1>
        <p className="text-center text-muted-foreground">
          Join the big member of the Raction family and be updated every day
        </p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <OAuthForm />
      </div>
    </section>
  )
}
