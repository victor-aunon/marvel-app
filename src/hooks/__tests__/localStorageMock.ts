export class LocalStorageMock {
  store: Record<string, string> = {}
  length: number

  constructor() {
    this.store = {}
    this.length = 0
  }

  key(n: number): string | null {
    if (typeof n === 'undefined') {
      throw new Error(
        "Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present."
      )
    }

    if (n >= Object.keys(this.store).length) {
      return null
    }

    return Object.keys(this.store)[n]
  }

  clear(): void {
    this.store = {}
    this.length = 0
  }

  getItem(key: string): string | null {
    return this.store[key] || null
  }

  setItem(key: string, value: string): void {
    this.store[key] = value
    this.length = Object.keys(this.store).length
  }

  removeItem(key: string): void {
    delete this.store[key]
    this.length = Object.keys(this.store).length
  }
}
