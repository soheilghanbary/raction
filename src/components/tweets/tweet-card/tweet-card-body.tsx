import Line from "@/components/line"

interface Props {
  body: string
}

export default function TweetCardBody({ body }: Props) {
  return (
    <>
      <div className="text-[15px]" dangerouslySetInnerHTML={{ __html: body }} />
      <Line />
    </>
  )
}
