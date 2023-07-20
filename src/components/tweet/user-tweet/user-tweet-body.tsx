import Line from "@/components/line"

interface Props {
  body: string
}

export default function UserTweetBody({ body }: Props) {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Line />
    </>
  )
}
