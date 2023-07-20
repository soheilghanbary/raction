export interface TweetCardProps {
  id: string
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
  views: number
}

export interface TweetListProps {
  tweets: TweetCardProps[]
}
