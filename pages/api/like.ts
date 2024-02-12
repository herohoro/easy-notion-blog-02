import { NextApiRequest, NextApiResponse } from 'next'

import { getPostBySlug, incrementLikes } from '../../lib/notion/client'

export const runtime = 'edge'

const ApiBlogSlug = async function (req: NextApiRequest, res: NextApiResponse) {
  // res.setHeader('Content-Type', 'application/json')
  if (req.method !== 'PUT') {
    res.statusCode = 400
    res.end()
    return
  }

  const { slug } = req.query

  if (!slug) {
    res.statusCode = 400
    res.end()
    return
  }

  try {
    const post = await getPostBySlug(slug as string)
    if (!post) {
      throw new Error(`post not found. slug: ${slug}`)
    }

    await incrementLikes(post)

    res.statusCode = 200
    res.end()
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}

export default ApiBlogSlug
