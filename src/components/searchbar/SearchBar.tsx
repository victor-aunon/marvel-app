import { InputElement } from '../common'
import { FiSearch } from 'react-icons/fi'
import { SearchBarContainer } from './SearchBarContainer.styles'
import { useSearch } from '../../hooks'

interface SearchBarProps {
  placeholder: string
}

export function SearchBar({ placeholder }: SearchBarProps): JSX.Element {
  const { search, handleChange } = useSearch()

  return (
    <SearchBarContainer>
      <label htmlFor="search-bar" style={{ visibility: 'hidden' }}>
        Search for a Marvel character
      </label>
      <InputElement
        name="search-bar"
        id="search-bar"
        placeholder={placeholder}
        value={search}
        onChange={handleChange}
      />
      <FiSearch aria-hidden={true} className="search-icon" />
    </SearchBarContainer>
  )
}
