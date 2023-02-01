import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  testEnvironment: 'jsdom',
  testMatch: [`**/?(*.)+(spec|test).+(ts|tsx)`],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
}

export default config
