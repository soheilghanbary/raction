import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignOutButton from "@/components/sign-out-button"

export default function SettingsPage() {
  return (
    <Card className="my-4">
      <CardHeader className="border-b mb-4">
        <CardTitle>Sign Out Account</CardTitle>
        <CardDescription>do you want a loggout your account?</CardDescription>
      </CardHeader>
      <CardContent>
        <SignOutButton />
      </CardContent>
    </Card>
  )
}
