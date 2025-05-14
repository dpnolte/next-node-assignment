# News CMS

This Payload CMS application manages content for the News Website. It provides an admin interface and API endpoints for content management.

## Quick Start

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm package manager
- Docker (for running MongoDB)

### Setup and Run

1. Start the MongoDB database:

   ```bash
   docker-compose up -d
   ```

   This will start MongoDB on port 27019.

2. Install dependencies and start the development server:

   ```bash
   pnpm install && pnpm dev
   ```

3. Access the CMS admin panel:

   ```
   http://localhost:3001/admin
   ```

   On first run, a default admin user will be created and the database will be seeded with sample articles.

## Configuration

The environment is already configured with:

- `MONGODB_URI`: mongodb://127.0.0.1:27019
- Port: 3001

## Collections

This CMS has two main collections:

### Articles

The `Articles` collection is the primary content type and includes:

- Title
- Publication Date/Time
- (Assignment 2 will have you implement a pinPosition field)

The Articles collection features custom API endpoints:

- `/api/articles/recent` - Returns the most recent articles
- `/api/articles/seed` - Seeds the database with sample articles (used in Assignment 3)

### Users

The `Users` collection manages authentication for the admin panel:

- Email/password authentication
- Role-based access control
- Secure login to the admin dashboard

## Custom Endpoints

The CMS includes several custom API endpoints that extend its functionality:

- `/news-cms/src/collections/endpoints/get-most-recent-with-pinned.ts` - Endpoint for retrieving recent articles (Assignment 2)
- `/news-cms/src/collections/endpoints/async-task-queue.ts` - Utility for managing async tasks (Assignment 3)
- `/news-cms/src/collections/endpoints/seed.ts` - Endpoint for seeding articles

## Development Notes

- The admin panel is accessible at `http://localhost:3001/admin`
- API endpoints are available at `http://localhost:3001/api/*`
- Changes to TypeScript files will automatically restart the server
