import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context'
import { useFetchFavorites } from '../../hooks'
import { ResultsContainer } from '../common/ResultsContainer.styles'
import { CharacterCard } from '../card/CharacterCard'
import { Pagination } from '../pagination'
import type { Character } from '../../interfaces'

export function SearchFavorites(): JSX.Element {
  const { favoritesPages, getFavorites } = useFetchFavorites()
  const { query } = useContext(QueryContext)
  const [favorites, setFavorites] = useState<Character[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    getFavorites(query, page)
      .then((fetchedFavorites) => {
        setFavorites(fetchedFavorites)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [query, page])

  return (
    <>
      {favoritesPages > 1 && (
        <Pagination
          pages={favoritesPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
      <ResultsContainer>
        {favorites.length > 0 ? (
          favorites.map((character) => {
            return (
              <CharacterCard
                key={character.id}
                character={character}
                favorite={true}
              />
            )
          })
        ) : (
          <p>There are no results matching your search</p>
        )}
      </ResultsContainer>
      {favoritesPages > 1 && (
        <Pagination
          pages={favoritesPages}
          currentPage={page}
          setCurrentPage={setPage}
        />
      )}
    </>
  )
}
