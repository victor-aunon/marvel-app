import { render, screen, act } from '@testing-library/react'
import { Provider } from 'react-redux'
import appStore from '../../state/store'
import { QueryContextProvider, ListFavorites } from './components'
import { fakeCharacter1, fakeCharacter2 } from './fakeCharacters'

describe('Test useFetchFavorites hook', () => {
  const favorites = [fakeCharacter1, fakeCharacter2]
  test('Should list the testing characters', async () => {
    await act(async () =>
      render(
        <QueryContextProvider>
          <Provider store={appStore}>
            <ListFavorites searchString={''} favoriteCharacters={favorites} />
          </Provider>
        </QueryContextProvider>
      )
    )

    // Test page indicator
    const pageIndicator = screen.getByText('Page: 1')
    expect(pageIndicator).toBeDefined()

    // Test character fields
    favorites.forEach((favorite) => {
      const characterImage = screen.getByAltText(favorite.name)
      expect(characterImage).toBeDefined()
      expect(characterImage.getAttribute('src')).toEqual(favorite.image)
      expect(screen.getByText(`Name: ${favorite.name}`)).toBeDefined()
      expect(
        screen.getByText(`Description: ${favorite.description}`)
      ).toBeDefined()
      expect(screen.getByText(`Comics: ${favorite.comicsCount}`)).toBeDefined()
      expect(screen.getByText(`${favorite.comicsUrl}`)).toBeDefined()
    })
  })
})
