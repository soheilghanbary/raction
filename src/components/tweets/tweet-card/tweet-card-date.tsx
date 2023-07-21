import { useMemo } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

interface Props {
  published: Date
}
export default function TweetCardDate({ published }: Props) {
  const date = useMemo(() => dayjs(published).fromNow(), [published])
  return <>{date}</>
}
