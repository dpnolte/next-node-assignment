import { NextResponse } from 'next/server'
import { Endpoint } from 'payload'

// THis is an extra endpoint besides the default endpoints.
// See the default endpoints here: https://payloadcms.com/docs/rest-api/overview#collections
export const getMostRecentWithPinnedArticlesEndpoint: Endpoint = {
  method: 'get',
  path: '/recent',
  handler: async (req) => {
    // See documentation for how to use the payload API:
    const articles = await req.payload.find({
      collection: 'articles',
      limit: 10,
      sort: '-publicationDateTime',
    })

    return NextResponse.json(articles.docs, { status: 200 })
  },
}
