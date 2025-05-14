# News Website

This is a Next.js application that consumes content from the News CMS API. It serves as the frontend for displaying articles and other content to users.

## Quick Start

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager
- The News CMS should be running at http://localhost:3001

### Setup and Run

1. Install dependencies and start the development server:

   ```bash
   pnpm install && pnpm dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Project Structure

The website is built with Next.js 15 using the App Router architecture:

- `src/app/` - Contains the main application routes
- `src/components/` - Reusable React components
- `src/models.ts` - TypeScript interfaces for data models
- `src/app/api/` - API routes for server-side operations

## Assignment Connection

This website is part of Assignment 1, where you'll need to create an API endpoint that fetches articles from the CMS. The implementation should be done in:

```
src/app/api/articles/route.ts
```

The endpoint should return data that matches the `Article` interface defined in `src/models.ts`.

## Key Components

### ArticleList Component

The `ArticleList` component in `src/components/article-list.client.tsx` is responsible for:

- Fetching articles from your API endpoint
- Rendering the list of articles
- Handling loading and error states

This component will consume the API endpoint you create in Assignment 1.

## Development Notes

- The website uses Next.js App Router for routing
- Uses React 19 with the latest features
- Runs on port 3000 by default
- The site expects the CMS to be running at http://localhost:3001
