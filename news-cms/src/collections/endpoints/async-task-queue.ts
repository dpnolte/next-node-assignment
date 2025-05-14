export type Task<T> = () => Promise<T>

export class AsyncQueue {
  private pending: Array<{
    task: Task<any>
    resolve: Function
    reject: Function
    retriesLeft: number
  }> = []
  private running = 0

  constructor(
    private concurrency: number,
    private maxRetries = 0,
  ) {}

  enqueue<T>(task: Task<T>): void {
    this.pending.push({ task, resolve: null!, reject: null!, retriesLeft: this.maxRetries })
  }

  size(): number {
    return this.pending.length + this.running
  }

  async runAll<T>(): Promise<T[]> {
    // implement:
    // 1. Kick off up to `concurrency` tasks
    // 2. On each finish/fail: either resolve, or if retriesLeft>0 re-enqueue, else reject
    // 3. Continue until no pending + no running
    // 4. Return array of all results in enqueue order
    throw Error('Not yet implemented')
  }
}
