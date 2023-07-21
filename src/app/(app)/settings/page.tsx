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
      <Card className="my-4">
        <CardHeader className="mb-4 border-b">
          <CardTitle>Sign Out Account</CardTitle>
          <CardDescription>do you want a loggout your account?</CardDescription>
        </CardHeader>
        <CardContent>
          <SignOutButton />
        </CardContent>
      </Card>
      <Card className="my-4">
        <CardHeader className="mb-4 border-b">
          <CardTitle>Theme Settings</CardTitle>
          <CardDescription>choose your favorite theme?</CardDescription>
        </CardHeader>
        <CardContent>
          <SelectTheme />
        </CardContent>
      </Card>
    </>
  )
}
