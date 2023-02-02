import { useEffect } from 'react'
import { InputSearch } from './SearchBar.styles'
import { FiSearch } from 'react-icons/fi'
import { SearchBarContainer } from './SearchBarContainer.styles'
import { useSearch } from '../../hooks'

export function SearchBar(): JSX.Element {
  const { search, handleChange, clearSearch } = useSearch()

  useEffect(() => {
    clearSearch()
  }, [])

  return (
    <SearchBarContainer>
      <label htmlFor="search-bar" style={{ visibility: 'hidden' }}>
        Search for a Marvel character
      </label>
      <InputSearch
        name="search-bar"
        id="search-bar"
        placeholder="Search for a Marvel character"
        value={search}
        onChange={handleChange}
      />
      <FiSearch aria-hidden={true} className="search-icon" />
    </SearchBarContainer>
  )
}
