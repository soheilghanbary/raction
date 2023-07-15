import {
  BarChart2,
  BookmarkIcon,
  CommandIcon,
  HeartIcon,
  MessageCircle,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface Props {}

export default function TweetCard() {
  return (
    <div className="max-w-xl rounded-xl border p-4">
      <div className="mb-4 flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h2 className="space-x-2">
          <span className="font-medium">Hamed Bahram</span>
          <span className="text-muted-foreground">@hamed_BahramDev - 23h</span>
        </h2>
      </div>
      <p className="text-muted-foreground">
        I made a photo searcher website with @shadcn and Next.js 13.4 with
        Unsplash api <br />
        <img
          src="https://pbs.twimg.com/media/F1AW6sDXgAA3jK_?format=jpg&name=small"
          className="my-4 rounded-2xl"
        />
        https://picsearch.vercel.app
        <br /> Simple and modern 😎 <br />
        <span className="text-indigo-400 font-medium">#Nextjs</span>{" "}
        <span className="text-indigo-400 font-medium">#React</span>{" "}
        <span className="text-indigo-400 font-medium">#tailwindcss</span>
      </p>
      <hr className="my-4" />
      <ul className="flex items-center justify-center gap-10 text-sm">
        <li className="flex items-center text-pink-500">
          <HeartIcon className="mr-2 h-5 w-5" /> 287
        </li>
        <li className="flex items-center text-sky-500">
          <BookmarkIcon className="mr-2 h-5 w-5" /> 340
        </li>
        <li className="flex items-center text-teal-500">
          <MessageCircle className="mr-2 h-5 w-5" /> 6.85K
        </li>
        <li className="flex items-center text-muted-foreground">
          <BarChart2 className="mr-2 h-5 w-5" /> 14.34K
        </li>
      </ul>
    </div>
  )
}
