# Node.js Technical Assessment

Welcome to the technical assessment! This repository contains two interconnected applications:

1. **[News CMS](./news-cms/README.md)** - A Payload CMS application for managing content
2. **[News Website](./news-website/README.md)** - A Next.js frontend that displays content from the CMS

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager
- Docker (for running MongoDB)

If you don't have pnpm installed yet:

```bash
npm -i g corepack && corepack enable pnpm
```

### Step 1: Set up the News CMS

1. Navigate to the news-cms folder

   ```bash
   cd news-cms
   ```

2. Start MongoDB using Docker

   ```bash
   docker compose up -d
   ```

3. Install dependencies and start the development server

   ```bash
   pnpm install && pnpm dev
   ```

4. Access the CMS admin panel at [http://localhost:3001/admin](http://localhost:3001/admin)

   The first time you run it, a user will be automatically generated and 50 sample articles will be seeded.

### Step 2: Set up the News Website

1. Open a new terminal and navigate to the news-website folder

   ```bash
   cd news-website
   ```

2. Install dependencies and start the development server

   ```bash
   pnpm install && pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website

## Assignment Instructions

Please complete one or more of the following assignments based on the instructions from your interviewer:

1. [Assignment 1: Create an API Endpoint](./assignments/1-api-endpoint.md) - Build a Next.js API route that fetches articles from the CMS
2. [Assignment 2: Implement Pinned Articles in CMS API](./assignments/2-pinned-articles.md) - Enhance the CMS API to support pinned articles functionality
3. [Assignment 3: Implement the AsyncQueue Class](./assignments/3-async-queue-task.md) - Create a utility for managing asynchronous tasks with controlled concurrency

## Project Structure Overview

### News CMS (`/news-cms`)

The CMS is built with Payload CMS and includes these key components:

- **Collections**:

  - **Articles**: Content pages with essential details for display on the website
  - **Users**: Authentication-enabled collection for admin access (not part of the assessment)

- **Custom Endpoints**:
  - Recent Articles: API endpoint for retrieving the most recent articles

### News Website (`/news-website`)

A Next.js application that serves as the frontend for displaying content from the CMS.

## Need Help?

If you encounter any issues during setup or have questions about the assignments, please reach out to your interviewer for clarification.

Good luck with your assessment!
