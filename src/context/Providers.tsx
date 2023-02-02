import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { QueryContext } from './QueryContext'
import {
  CurrentCharacterContext,
  currentCharacterInitialState,
} from './CurrentCharacterContext'
import appTheme from '../styles/theme'
import appStore from '../state/store'
import type { Character } from '../interfaces'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps): JSX.Element {
  const [query, setQuery] = useState('')
  const [character, setCharacter] = useState<Character>(
    currentCharacterInitialState
  )

  return (
    <ThemeProvider theme={appTheme}>
      <Provider store={appStore}>
        <QueryContext.Provider value={{ query, setQuery }}>
          <CurrentCharacterContext.Provider value={{ character, setCharacter }}>
            {children}
          </CurrentCharacterContext.Provider>
        </QueryContext.Provider>
      </Provider>
    </ThemeProvider>
  )
}
