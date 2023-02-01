import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  QueryContextProvider,
  SetQueryComponent,
  DisplayQueryComponent,
} from './components'

describe('Test useSearch hook', () => {
  test('Should render the query string from the QueryContext provider', async () => {
    render(
      <QueryContextProvider>
        <SetQueryComponent />
        <DisplayQueryComponent />
      </QueryContextProvider>
    )

    const inputElement = screen.getByPlaceholderText('Enter a text')
    expect(inputElement).toBeDefined()
    await userEvent.type(inputElement, 'This is a query string')
    const textElement = screen.getByText('This is a query string')
    expect(textElement).toBeDefined()
  })
})
