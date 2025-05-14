/**
 * The API endpoint should be implemented at /api/articles
 *
 * GET /api/articles
 *
 * It should use the NextJS app router handlers.
 *
 * Expected Response Format:
 * [
 *   {
 *     "title": "Article Title",
 *     "publicationDateTime": "2023-01-01T12:00:00Z"
 *   },
 *   ...
 * ]
 *
 * Query Parameters:
 * - limit: number (default: 10) - Number of articles to return
 * - page: number (default: 1) - Number of articles to skip
 *
 * Status Codes:
 * - 200: Success
 * - 400: Bad Request (invalid parameters)
 * - 404: Not Found
 * - 500: Server Error
 * - 503: Service Unavailable (CMS is down)
 *
 * Example Usage:
 * fetch('/api/articles?limit=5&page=2')
 *   .then(response => {
 *     if (!response.ok) throw new Error('Network response was not ok');
 *     return response.json();
 *   })
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Error fetching articles:', error));
 *
 * The source of this API is the local CMS service.
 * You can fetch the articles from the CMS.
 * Please see the REST documentation by Payload: https://payloadcms.com/docs/rest-api/overview
 * The collection slug is "articles". So the url starts with "http://localhost:3001/api/articles".
 *
 */

/// This file has been intentionally left blank for the coding exercise
// Implement the API endpoint here according to the instructions
