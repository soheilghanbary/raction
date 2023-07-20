import { checkUserLikedPost } from "@/actions/post"

export default async function TestPage() {
  const likedByMe = await checkUserLikedPost("clka0ra6q0004tc6cixfpwsr1")
  const log = `hey this is liked by me: ${likedByMe}`
  return (
    <div>
      <h1>this is my test page</h1>
      {log}
    </div>
  )
}
