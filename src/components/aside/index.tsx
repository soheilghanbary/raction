import Link from "next/link"

import { Icons } from "../icons"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"

export default function ASide() {
  return (
    <div className="sticky top-4 space-y-4 md:hidden lg:block">
      <SearchBox />
      <Card className="border-0 bg-secondary">
        <CardHeader>
          <CardTitle>Whats happening</CardTitle>
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-4">Top Tags</CardTitle>
          <div className="space-y-4">
            <div className="text-sm">
              <p>#GPT-4</p>
              <span className="text-muted-foreground">11.482 Tweets</span>
            </div>
            <div className="text-sm">
              <p>#vscode</p>
              <span className="text-muted-foreground">2.482 Tweets</span>
            </div>
            <div className="text-sm">
              <p>#mahsa_amini</p>
              <span className="text-muted-foreground">26.482 Tweets</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link className="text-sm text-[#7856FF] underline" href={"/tags"}>
            Show more
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

const SearchBox = () => (
  <div className="relative flex w-full items-center">
    <Icons.search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2" />
    <input
      type="text"
      placeholder="search Twitter"
      className="flex w-full rounded-full bg-secondary p-3 pl-14 ring-[#7856FF] transition focus:ring-2"
    />
  </div>
)
