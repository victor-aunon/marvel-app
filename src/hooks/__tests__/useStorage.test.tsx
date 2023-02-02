import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import appStore from '../../state/store'
import { LocalStorageMock } from './localStorageMock'
import { StorageTestComponent } from './components'
import type { Character } from '../../interfaces'

describe('Test useStorage hook', () => {
  const fakeCharacter: Character = {
    id: 0,
    name: 'Tracy Test',
    description: 'Tracy Test is a heroine',
    image: 'https://picsum.photos/id/111/200/200.jpg',
    comicsCount: 21,
    comicsUrl: 'https://tracytest.com',
  }

  beforeEach(() => {
    // Mock a clean localStorage
    global.localStorage = new LocalStorageMock()
  })

  test('Should store and remove a new character', async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <StorageTestComponent character={fakeCharacter} />
        </Provider>
      )
    )
    // Simulate a click to store the fakeCharacter
    const saveFavoriteButton = screen.getByRole('button', {
      name: 'Save favorite',
    })
    await userEvent.click(saveFavoriteButton)
    // Check that the fakeCharacter is persisted in local storage
    expect(global.localStorage.getItem('favorites')).toEqual(
      JSON.stringify([fakeCharacter])
    )
    // Simulate a click to remove the fakeCharacter
    const removeFavoriteButton = screen.getByRole('button', {
      name: 'Remove favorite',
    })
    await userEvent.click(removeFavoriteButton)
    // Check that the fakeCharacter has been removed from local storage
    expect(global.localStorage.getItem('favorites')).toEqual(JSON.stringify([]))
  })

  test('Should delete an existing character', async () => {
    // First populate local storage with fakeCharacter's data
    global.localStorage.setItem('favorites', JSON.stringify([fakeCharacter]))

    await act(async () =>
      render(
        <Provider store={appStore}>
          <StorageTestComponent character={fakeCharacter} />
        </Provider>
      )
    )
    // Check that the fakeCharacter is stored in local storage
    expect(global.localStorage.getItem('favorites')).toEqual(
      JSON.stringify([fakeCharacter])
    )
    // Simulate a click to remove the fakeCharacter
    const removeFavoriteButton = screen.getByRole('button', {
      name: 'Remove favorite',
    })
    await userEvent.click(removeFavoriteButton)
    // Check that the fakeCharacter has been removed from local storage
    expect(global.localStorage.getItem('favorites')).toEqual(JSON.stringify([]))
  })
})
