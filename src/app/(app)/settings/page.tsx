import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SelectTheme from "@/components/select-theme"
import SignOutButton from "@/components/sign-out-button"

export default function SettingsPage() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-lg font-semibold">Sign Out Account</h1>
        <p className="text-sm text-muted-foreground">
          do you want a loggout your account?
        </p>
      </div>
      <hr />
      <SignOutButton />
      <hr />
      <div className="p-4">
        <SelectTheme />
      </div>
    </>
  )
}
