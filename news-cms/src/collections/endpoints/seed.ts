import { NextResponse } from 'next/server'
import { Endpoint, Payload } from 'payload'
import { AsyncQueue } from './async-task-queue'

const SEED_COUNT = 50
const DAY_IN_MS = 1000 * 60 * 60 * 24

export const seedMoreArticles: Endpoint = {
  method: 'get', // This should be a POST, but for convenience purposes, we use GET
  path: '/seed',
  handler: async (req) => {
    seed(req.payload).catch((error) => {
      req.payload.logger.error(error)
    })
    return NextResponse.json({ message: 'Accepted' }, { status: 202 })
  },
}

async function seed(payload: Payload) {
  const currentNumberOfArticles = await payload.count({
    collection: 'articles',
  })

  const now = Date.now()
  const total = currentNumberOfArticles.totalDocs + SEED_COUNT
  const queue = new AsyncQueue(/* concurrency */ 2, /* maxRetries= */ 1)

  for (
    let articleNumber = currentNumberOfArticles.totalDocs;
    articleNumber <= total;
    articleNumber++
  ) {
    const task = async () => {
      const article = {
        title: `Article #${articleNumber}`,
        publicationDateTime: new Date(now - articleNumber * DAY_IN_MS),
      }

      await payload.create({
        collection: 'articles',
        data: article,
      })
    }
    queue.enqueue(task)
  }
  payload.logger.info('Enqueued article seeds:', queue.size())
  await queue.runAll()
  payload.logger.info(`Seeded ${SEED_COUNT} articles.`)
}
