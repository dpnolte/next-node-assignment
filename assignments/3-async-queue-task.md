# Assignment 3: Implement the AsyncQueue Class

## Goal

In this assignment, you will implement an `AsyncQueue` class that controls the execution of asynchronous tasks with limited concurrency. This utility is essential for scenarios where you need to manage multiple asynchronous operations efficiently, such as seeding a database with controlled parallelism.

## Requirements

Implement the `AsyncQueue` class in the file [`news-cms/src/collections/endpoints/async-task-queue.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-cms/src/collections/endpoints/async-task-queue.ts) with the following specifications:

1. **Constructor**: Should accept the following parameters:

   - `concurrency: number` – Maximum number of tasks that can run in parallel
   - `maxRetries?: number` – Maximum number of retries for failed tasks (default: 0)

2. **Enqueue Method**:

   - `enqueue<T>(task: () => Promise<T>): void` – Adds a task to the queue

3. **Size Method**:

   - `size(): number` – Returns the total count of pending and currently running tasks

4. **RunAll Method**:
   - `runAll<T>(): Promise<T[]>` – Processes all enqueued tasks with the following behavior:
     - Executes tasks in parallel up to the specified concurrency limit
     - Retries failed tasks up to `maxRetries` times
     - Resolves with an array of all results in the original enqueue order
     - Handles task errors appropriately without affecting other tasks

## Current Implementation

The file already contains a stub implementation with the class structure and method signatures. Your task is to complete the implementation, particularly focusing on the `runAll()` method which currently throws a "Not yet implemented" error.

## Usage Context

The `AsyncQueue` is used in the [`news-cms/src/collections/endpoints/seed.ts`](https://github.com/dpnolte/next-node-assignment/blob/main/news-cms/src/collections/endpoints/seed.ts) file to seed the database with articles. This endpoint exposes an API at `http://localhost:3001/api/articles/seed` which can be used to test your implementation.

## Testing Your Implementation

1. Start the application with `pnpm dev` in the `news-cms` folder
2. Access `http://localhost:3001/api/articles/seed` in your browser or via a tool like Postman
3. This will trigger the seeding process which uses your `AsyncQueue` implementation to create articles with controlled concurrency

## Bonus Features (Optional)

1. Add robust error handling to ensure one failed task doesn't affect others
2. Implement task priority (execute higher priority tasks first)
3. Add timeout support for tasks
4. Create a visualization or logging system to observe queue operation

## Evaluation Criteria

Your implementation will be evaluated based on:

1. Correctness – Does it work as expected?
2. Code quality – Is the code clean, well-organized, and well-commented?
3. Error handling – How well does it handle edge cases and errors?
4. TypeScript usage – Are types properly defined and used?
5. Performance – Is the implementation efficient?

Good luck! We're looking for a clean, efficient implementation that demonstrates your understanding of asynchronous TypeScript and concurrency management.
