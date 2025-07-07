# Assignment 2: Implement Pinned Articles in CMS API

## Overview

In this assignment, you will update a custom API endpoint in the Payload CMS to support pinned articles functionality. The Payload CMS is used to manage articles, and editors need the ability to pin certain articles in specific positions when retrieving the most recent articles. This assignment tests your ability to:

1. Understand and modify an existing Payload CMS endpoint
2. Implement business logic for article prioritization
3. Work with custom data structures and sorting algorithms
4. Create a robust API implementation that handles edge cases

## Requirements

Implement the logic in the [`news-cms/src/collections/endpoints/get-most-recent-with-pinned.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-cms/src/collections/endpoints/get-most-recent-with-pinned.ts) endpoint to:

1. Fetch the most recent articles based on their `publicationDateTime`
2. Override this default sorting by placing pinned articles in their specified positions
3. Make sure the endpoint properly respects the `pinPosition` field in the Article collection
4. The endpoint should return a maximum of 10 articles
5. Implement proper error handling

## Implementation Details

The Article collection should be updated with a `pinPosition` field that allows editors to specify a numeric position (1 is first, 2 is second, etc.) where the article should appear in the results regardless of its publication date.

Your implementation should:

1. Add the `pinPosition` field to the Article collection config in [`news-cms/src/collections/Article.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-cms/src/collections/Article.ts)
2. First fetch articles that have a `pinPosition` set (not null or undefined), ordered by their `pinPosition`
3. Then fetch the most recent articles by `publicationDateTime` (descending order)
4. Merge these results so that pinned articles appear in their specified positions, displacing regular articles as needed
5. Ensure the total number of returned articles is capped at 10
6. Consider edge cases such as:
   - Multiple articles with the same `pinPosition` (use `publicationDateTime` as a tiebreaker)
   - `pinPosition` values beyond the limit of 10 (these should be ignored)
   - Articles with invalid `pinPosition` values

## Acceptance Criteria

1. The endpoint should return a 200 status code with an array of articles when successful
2. Pinned articles should appear in their specified positions in the response
3. The total number of articles should not exceed 10
4. The code should be clean, well-commented, and follow best practices
5. The endpoint should handle edge cases gracefully
6. The implementation should be efficient with minimal database queries

## How to Test

1. Make sure the Payload CMS is running at `http://localhost:3001`
2. Log in to the admin panel at `http://localhost:3001/admin`
3. Create several articles with different `publicationDateTime` values
4. Set `pinPosition` values on some articles
5. Test the endpoint by visiting `http://localhost:3001/api/articles/recent`
6. Verify that pinned articles appear in their specified positions

Good luck! We're looking for a clean, efficient implementation that demonstrates your ability to handle a more complex feature with a lot information to deep dive into.
