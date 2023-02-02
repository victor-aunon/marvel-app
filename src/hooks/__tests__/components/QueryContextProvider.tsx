import { useState } from 'react'
import { QueryContext } from '../../../context'

interface ProvidersProps {
  children: React.ReactNode
}

export function QueryContextProvider({
  children,
}: ProvidersProps): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  )
}
