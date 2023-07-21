import { NextApiRequest, NextApiResponse } from "next"
import { createRouter } from "next-connect"

export const api = createRouter<NextApiRequest, NextApiResponse>()

export const handler = api.handler({
  onError: (err, req, res) => {
    return res.json({ err })
  },
})
