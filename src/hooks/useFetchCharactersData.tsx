import { useContext, useState } from 'react'
import { Md5 } from 'ts-md5'
import { QueryContext } from '../context'
import type { Character, CharacterApi, Comic, ComicApi } from '../interfaces'

interface UseFetchCharacterData {
  getCharacters: (page?: number) => Promise<Character[]>
  getCharacterComics: (characterId: number, page?: number) => Promise<Comic[]>
  isLoading: boolean
  charactersPages: number
  comicsPages: number
}

export function useFetchCharactersData(): UseFetchCharacterData {
  const publicKey: string = process.env.VITE_PUBLIC_API_KEY ?? ''
  const privateKey: string = process.env.VITE_PRIVATE_API_KEY ?? ''
  const resultsPerCall = 20
  const apiUrl = 'https://gateway.marvel.com/v1/public'
  const { query } = useContext(QueryContext)
  const [charactersPages, setCharactersPages] = useState(1)
  const [comicsPages, setComicsPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  function createApiHash(): { ts: string; hash: string } {
    const ts = new Date().getTime().toString()
    return { ts, hash: Md5.hashStr(`${ts}${privateKey}${publicKey}`) }
  }

  async function getCharacters(page = 0): Promise<Character[]> {
    const { ts, hash } = createApiHash()
    const charactersUrl = new URL(`${apiUrl}/characters`)
    charactersUrl.searchParams.append('ts', ts)
    charactersUrl.searchParams.append('apikey', publicKey)
    charactersUrl.searchParams.append('hash', hash)
    charactersUrl.searchParams.append('nameStartsWith', query)
    charactersUrl.searchParams.append('limit', `${resultsPerCall}`)
    charactersUrl.searchParams.append('offset', `${page * resultsPerCall}`)

    const characters: Character[] = []
    setIsLoading(true)

    try {
      const response = await fetch(charactersUrl)
      const data = await response.json()
      const charactersApi: CharacterApi[] = data.data.results
      setCharactersPages((prev) => Math.ceil(data.data.total / resultsPerCall))

      charactersApi.forEach((character) => {
        characters.push({
          id: character.id,
          name: character.name,
          description: character.description,
          image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
          comicsCount: character.comics.available,
          comicsUrl: character.urls.filter((url) => url.type === 'comiclink')[0]
            .url,
          comment: '',
        })
      })
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
    return characters
  }

  async function getCharacterComics(
    characterId: number,
    page = 0
  ): Promise<Comic[]> {
    const { ts, hash } = createApiHash()
    const comicsUrl = new URL(`${apiUrl}/characters/${characterId}/comics`)
    comicsUrl.searchParams.append('ts', ts)
    comicsUrl.searchParams.append('apikey', publicKey)
    comicsUrl.searchParams.append('hash', hash)
    comicsUrl.searchParams.append('limit', `${resultsPerCall}`)
    comicsUrl.searchParams.append('offset', `${page * resultsPerCall}`)

    const comics: Comic[] = []
    setIsLoading(true)

    try {
      const response = await fetch(comicsUrl)
      const data = await response.json()
      const comicsApi: ComicApi[] = data.data.results
      setComicsPages((prev) => Math.ceil(data.data.total / resultsPerCall))

      comicsApi.forEach((comic) => {
        comics.push({
          id: comic.id,
          characterId,
          title: comic.title,
          issueNumber: comic.issueNumber,
          description: comic.description,
          onSaleDate: comic.dates.filter(
            (date) => date.type === 'onsaleDate'
          )[0].date,
          image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          url: comic.urls.filter((url) => url.type === 'detail')[0].url,
        })
      })
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
    return comics
  }

  return {
    getCharacters,
    getCharacterComics,
    isLoading,
    charactersPages,
    comicsPages,
  }
}
