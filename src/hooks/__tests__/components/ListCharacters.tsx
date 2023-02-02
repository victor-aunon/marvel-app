import { useEffect, useState } from 'react'
import { useFetchCharactersData } from '../../useFetchCharactersData'
import type { Character } from '../../../interfaces'

export function ListCharacters(): JSX.Element {
  const { getCharacters, charactersPages } = useFetchCharactersData()
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharacters()
      .then((fetchedCharacters) => {
        setCharacters(fetchedCharacters)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  return (
    <>
      <p>Page: {charactersPages}</p>
      {characters.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <p>Name: {character.name}</p>
          <p>Description: {character.description}</p>
          <p>Comics: {character.comicsCount}</p>
          <a href={character.comicsUrl}>{character.comicsUrl}</a>
        </div>
      ))}
    </>
  )
}
