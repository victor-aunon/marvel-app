import { createContext } from 'react'

export const QueryContext = createContext({
  query: '',
  setQuery: (query: string) => {},
})
