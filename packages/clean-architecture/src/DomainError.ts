export class DomainError extends Error {
  constructor(name: string, ...params: any[]) {
    super(...params)

    if ((Error as any).captureStackTrace) {
      ;(Error as any).captureStackTrace(this, DomainError)
    }

    this.name = name
  }
}
