import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { QueryContext } from './QueryContext'
import appTheme from '../styles/theme'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const [query, setQuery] = useState('')

  return (
    <ThemeProvider theme={appTheme}>
      <QueryContext.Provider value={{ query, setQuery }}>
        {children}
      </QueryContext.Provider>
    </ThemeProvider>
  )
}
