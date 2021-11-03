import type { NextApiRequest, NextApiResponse } from 'next'

export default async function subscribers(req: NextApiRequest, res: NextApiResponse) {
  const API_KEY = process.env.BUTTONDOWN_API_KEY
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })

  const { count } = await response.json()

  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')

  return res.status(200).json({ count })
}
