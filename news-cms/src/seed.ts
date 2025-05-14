import { Payload } from 'payload'

const ARTICLE_COUNT = 50
const DAY_IN_MS = 1000 * 60 * 60 * 24

export async function seed(payload: Payload) {
  const adminuser = await payload.find({
    collection: 'users',
    where: { email: { equals: 'test@test.nl' } },
    limit: 1,
  })
  if (adminuser.totalDocs === 0) {
    await payload.create({ collection: 'users', data: { email: 'test@test.nl', password: 'test' } })
  }
  const currentNumberOfArticles = await payload.count({
    collection: 'articles',
  })
  if (currentNumberOfArticles.totalDocs > 0) {
    return
  }

  const now = Date.now()
  for (let articleNumber = 1; articleNumber <= ARTICLE_COUNT; articleNumber++) {
    const article = {
      title: `Article #${articleNumber}`,
      publicationDateTime: new Date(now - articleNumber * DAY_IN_MS),
    }

    await payload.create({
      collection: 'articles',
      data: article,
    })
  }
  payload.logger.info(`Seeded ${ARTICLE_COUNT} articles.`)
}
