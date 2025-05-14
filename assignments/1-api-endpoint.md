# Assignment 1: Create an API Endpoint

## Overview

In this assignment, you will create a REST API endpoint in Next.js that fetches articles from a CMS and returns them to the client. This assignment tests your ability to:

1. Create well-structured API routes in Next.js App Router
2. Handle API errors gracefully
3. Implement proper status codes and response formats
4. Add appropriate data validation and transformation
5. Implement performance optimizations where applicable

## Requirements

Create an API endpoint at [`news-website/src/app/api/articles/route.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-website/src/app/api/articles/route.ts) that:

1. Fetches the most recent articles from the Payload CMS running at `http://localhost:3001/api/articles/recent`
2. Implements proper error handling for:
   - Network errors
   - Timeout errors
   - Invalid responses from the CMS
   - Server errors
3. Returns the data in the correct format that matches the [`Article interface`](https://github.com/dpnolte/next-node-assignment/blob/main/news-website/src/models.ts) in [`news-website/src/models.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-website/src/models.ts)
4. Adds response caching where appropriate
5. Includes appropriate HTTP headers
6. Handles query parameters for:
   - Pagination (limit, offset)
   - Filtering (optional – if time permits)

## Acceptance Criteria

1. The endpoint should return a 200 status code with an array of articles when successful
2. The endpoint should return appropriate error status codes (4xx, 5xx) with error messages when unsuccessful
3. The endpoint should be properly typed with TypeScript
4. The code should be clean, well-commented, and follow best practices
5. The endpoint should handle edge cases gracefully
6. Response times should be optimized where possible
7. The endpoint should work with the existing [`ArticleList component`](https://github.com/dpnolte/next-node-assignment/blob/main/news-website/src/components/article-list.client.tsx) in [`news-website/src/components/article-list.client.tsx`](https://github.com/dpnolte/next-node-assignment/blob/main/news-website/src/components/article-list.client.tsx)

## Bonus Points

1. Implement unit tests for the endpoint
2. Add rate limiting
3. Add logging
4. Implement more advanced filtering options
5. Add security headers and other security best practices

## How to Test

1. Make sure the Payload CMS is running at `http://localhost:3001`
2. Run the news website at `http://localhost:3000`
3. Visit the homepage to see if articles are fetched and displayed correctly
4. Test error scenarios by temporarily disabling the CMS or modifying the URL
5. Use tools like Postman or the browser’s fetch API to test the endpoint directly

Good luck! We’re looking for clean code, attention to detail, and robust error handling.
