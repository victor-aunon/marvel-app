import { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { QueryContext } from '../../context'
import { useFetchCharactersData } from '../../hooks'
import { ResultsContainer } from '../common/ResultsContainer.styles'
import { CharacterCard } from '../card/CharacterCard'
import { Pagination } from '../pagination'
import type { AppStore } from '../../state/store'
import type { Character } from '../../interfaces'

export function SearchResults(): JSX.Element {
  const { getCharacters, charactersPages, isLoading } = useFetchCharactersData()
  const { query } = useContext(QueryContext)
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState(0)
  const favoritesState = useSelector((store: AppStore) => store.favorites)

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

  // Reset page to zero on each query change
  useEffect(() => {
    setPage(0)
  }, [query])

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
        {!isLoading &&
          query !== '' &&
          (characters.length > 0 ? (
            characters.map((character) => {
              const isFavorite = favoritesState.find(
                (favorite) => favorite.id === character.id
              )
              return (
                <CharacterCard
                  key={character.id}
                  character={character}
                  favorite={Boolean(isFavorite)}
                />
              )
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
