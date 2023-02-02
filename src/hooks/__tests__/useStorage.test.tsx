import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import appStore from '../../state/store'
import { LocalStorageMock } from './localStorageMock'
import { StorageTestComponent } from './components'
import { fakeCharacter1 } from './fakeCharacters'
import type { Character } from '../../interfaces'

describe('Test useStorage hook', () => {
  beforeEach(() => {
    // Mock a clean localStorage
    global.localStorage = new LocalStorageMock()
  })

  test('Should store and remove a new character', async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <StorageTestComponent character={fakeCharacter1} />
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
      JSON.stringify([fakeCharacter1])
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
    global.localStorage.setItem('favorites', JSON.stringify([fakeCharacter1]))

    await act(async () =>
      render(
        <Provider store={appStore}>
          <StorageTestComponent character={fakeCharacter1} />
        </Provider>
      )
    )
    // Check that the fakeCharacter is stored in local storage
    expect(global.localStorage.getItem('favorites')).toEqual(
      JSON.stringify([fakeCharacter1])
    )
    // Simulate a click to remove the fakeCharacter
    const removeFavoriteButton = screen.getByRole('button', {
      name: 'Remove favorite',
    })
    await userEvent.click(removeFavoriteButton)
    // Check that the fakeCharacter has been removed from local storage
    expect(global.localStorage.getItem('favorites')).toEqual(JSON.stringify([]))
  })

  test('Should add a comment to an existing character', async () => {
    // First populate local storage with fakeCharacter's data
    global.localStorage.setItem('favorites', JSON.stringify([fakeCharacter1]))

    await act(async () =>
      render(
        <Provider store={appStore}>
          <StorageTestComponent character={fakeCharacter1} />
        </Provider>
      )
    )
    // Check that the fakeCharacter is stored in local storage
    expect(global.localStorage.getItem('favorites')).toEqual(
      JSON.stringify([fakeCharacter1])
    )
    // Simulate a click to add a comment to the fakeCharacter
    const addCommentbutton = screen.getByRole('button', {
      name: 'Add a comment',
    })
    await userEvent.click(addCommentbutton)
    // Check that the fakeCharacter's comment has been updated
    const updatedCharacter: Character[] = JSON.parse(
      global.localStorage.getItem('favorites') as string
    )
    expect(updatedCharacter[0].comment).toEqual('This is a comment')
  })
})
