import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context'
import { useFetchCharactersData } from '../../hooks'
import { ResultsContainer } from './ResultsContainer.styles'
import { CharacterCard } from './CharacterCard'
import { Pagination } from '../pagination'
import type { Character } from '../../interfaces'

export function SearchResults(): JSX.Element {
  const { getCharacters, charactersPages } = useFetchCharactersData()
  const { query } = useContext(QueryContext)
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    // Do not fetch characters if the query is empty
    if (query === '') return

    getCharacters(page)
      .then((fetchedCharacters) => {
        setCharacters(fetchedCharacters)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [query, page])

  return (
    <>
      {charactersPages > 1 && query !== '' && (
        <Pagination
          pages={charactersPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
      <ResultsContainer>
        {query !== '' &&
          (characters.length > 0 ? (
            characters.map((character) => {
              return <CharacterCard key={character.id} character={character} />
            })
          ) : (
            <p>There are no results matching your search</p>
          ))}
      </ResultsContainer>
      {charactersPages > 1 && query !== '' && (
        <Pagination
          pages={charactersPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
    </>
  )
}
