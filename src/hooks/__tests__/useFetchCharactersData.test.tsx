import { render, screen, act } from '@testing-library/react'
import { QueryContextProvider, ListCharacters, ListComics } from './components'
import { mockCharactersApiResponse } from './characters'
import { mockComicsApiResponse1, mockComicsApiResponse2 } from './comics'

describe('Test useFetchCharactersData hook', () => {
  test('Should list the testing characters', async () => {
    // Mocking fetch
    global.fetch = jest.fn(async () => {
      return await Promise.resolve({
        json: async () => await Promise.resolve(mockCharactersApiResponse),
      })
    }) as jest.Mock

    await act(async () =>
      render(
        <QueryContextProvider>
          <ListCharacters />
        </QueryContextProvider>
      )
    )

    // Test page indicator
    const pageIndicator = screen.getByText('Page: 1')
    expect(pageIndicator).toBeDefined()

    // Test character fields
    mockCharactersApiResponse.data.results.forEach((character) => {
      const characterImage = screen.getByAltText(character.name)
      expect(characterImage).toBeDefined()
      expect(characterImage.getAttribute('src')).toEqual(
        `${character.thumbnail.path}.${character.thumbnail.extension}`
      )
      expect(screen.getByText(`Name: ${character.name}`)).toBeDefined()
      expect(
        screen.getByText(`Description: ${character.description}`)
      ).toBeDefined()
      expect(
        screen.getByText(`Comics: ${character.comics.available}`)
      ).toBeDefined()
      expect(screen.getByText(`${character.urls[0].url}`)).toBeDefined()
    })
  })

  test('Should list the testing comics of character 1', async () => {
    // Mocking fetch
    global.fetch = jest.fn(async () => {
      return await Promise.resolve({
        json: async () => await Promise.resolve(mockComicsApiResponse1),
      })
    }) as jest.Mock

    await act(async () =>
      render(
        <QueryContextProvider>
          <ListComics characterId={1} />
        </QueryContextProvider>
      )
    )

    // Test page indicator
    const pageIndicator = screen.getByText('Page: 1')
    expect(pageIndicator).toBeDefined()

    // Test comic fields
    mockComicsApiResponse1.data.results.forEach((comic) => {
      const comicImage = screen.getByAltText(comic.title)
      expect(comicImage).toBeDefined()
      expect(comicImage.getAttribute('src')).toEqual(
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      )
      expect(screen.getByText(`Title: ${comic.title}`)).toBeDefined()
      expect(
        screen.getByText(`Description: ${comic.description}`)
      ).toBeDefined()
      expect(
        screen.getByText(
          `Date on sale: ${new Date(comic.dates[0].date).toDateString()}`
        )
      ).toBeDefined()
      expect(screen.getByText(`${comic.urls[0].url}`)).toBeDefined()
    })
  })

  test('Should list the testing comics of character 2', async () => {
    // Mocking fetch
    global.fetch = jest.fn(async () => {
      return await Promise.resolve({
        json: async () => await Promise.resolve(mockComicsApiResponse2),
      })
    }) as jest.Mock

    await act(async () =>
      render(
        <QueryContextProvider>
          <ListComics characterId={2} />
        </QueryContextProvider>
      )
    )

    // Test page indicator
    const pageIndicator = screen.getByText('Page: 1')
    expect(pageIndicator).toBeDefined()

    // Test comic fields
    mockComicsApiResponse2.data.results.forEach((comic) => {
      const comicImage = screen.getByAltText(comic.title)
      expect(comicImage).toBeDefined()
      expect(comicImage.getAttribute('src')).toEqual(
        `${comic.thumbnail.path}.${comic.thumbnail.extension}`
      )
      expect(screen.getByText(`Title: ${comic.title}`)).toBeDefined()
      expect(
        screen.getByText(`Description: ${comic.description}`)
      ).toBeDefined()
      expect(
        screen.getByText(
          `Date on sale: ${new Date(comic.dates[0].date).toDateString()}`
        )
      ).toBeDefined()
      expect(screen.getByText(`${comic.urls[0].url}`)).toBeDefined()
    })
  })
})
