import { useEffect, useState } from 'react'
import { useFetchCharactersData } from '../../useFetchCharactersData'
import type { Comic } from '../../../interfaces'

export function ListComics({
  characterId,
}: {
  characterId: number
}): JSX.Element {
  const { getCharacterComics, comicsPages } = useFetchCharactersData()
  const [comics, setComics] = useState<Comic[]>([])

  useEffect(() => {
    getCharacterComics(characterId)
      .then((fetchedComics) => {
        setComics(fetchedComics)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <p>Page: {comicsPages}</p>
      {comics.map((comic) => (
        <div key={comic.id}>
          <img src={comic.image} alt={comic.title} />
          <p>Title: {comic.title}</p>
          <p>Issue: {comic.issueNumber}</p>
          <p>Description: {comic.description}</p>
          <p>Date on sale: {new Date(comic.onSaleDate).toDateString()}</p>
          <a href={comic.url}>{comic.url}</a>
        </div>
      ))}
    </>
  )
}
