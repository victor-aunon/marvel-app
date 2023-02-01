import { useContext, useEffect, useState } from 'react'
import { QueryContext } from '../../context'
import { useFetchCharactersData } from '../useFetchCharactersData'
import type { Character, Comic } from '../../interfaces'

export function SetQueryComponent(): JSX.Element {
  const { setQuery } = useContext(QueryContext)
  const [text, setText] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    setText(value)
    setQuery(value)
  }

  return (
    <input placeholder="Enter a text" value={text} onChange={handleChange} />
  )
}

export function DisplayQueryComponent(): JSX.Element {
  const { query } = useContext(QueryContext)

  return <p>{query}</p>
}

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
