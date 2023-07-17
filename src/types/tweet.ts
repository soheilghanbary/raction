export interface TweetCardProps {
  id: number
  userId: string
  body: string
  published: Date
  user: {
    name: string
    email: string
    image: string
  }
  likes: []
  comments: []
}

export interface TweetListProps {
  tweets: TweetCardProps[]
}
