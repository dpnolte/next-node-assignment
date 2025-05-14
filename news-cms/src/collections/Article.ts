import { CollectionConfig } from 'payload'
import { getMostRecentWithPinnedArticlesEndpoint } from './endpoints/get-most-recent-with-pinned'

export const Article: CollectionConfig = {
  admin: {
    useAsTitle: 'title',
  },
  slug: 'articles',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'publicationDateTime',
      type: 'date',
      required: true,
    },
    // TODO: (assignment 2) add field for pinning articles. Name this field 'pinPosition'
    // See
    // {
    //   name: 'pinPosition',
    // },
  ],
  endpoints: [getMostRecentWithPinnedArticlesEndpoint],
}
