import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context'
import { useFetchCharactersData } from '../../hooks'
import { ResultsContainer } from './ResultsContainer.styles'
import { CharacterCard } from './CharacterCard'
import type { Character } from '../../interfaces'

export function SearchResults(): JSX.Element {
  const { getCharacters } = useFetchCharactersData()
  const { query } = useContext(QueryContext)
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    // Do not fetch characters if the query is empty
    if (query === '') return

    getCharacters()
      .then((fetchedCharacters) => {
        setCharacters(fetchedCharacters)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [query])

  return (
    <ResultsContainer>
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </ResultsContainer>
  )
}
