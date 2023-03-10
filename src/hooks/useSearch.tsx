import { useContext, useState, useEffect } from 'react'
import { QueryContext } from '../context'

interface UseSearch {
  search: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  clearSearch: () => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function useSearch(): UseSearch {
  const [search, setSearch] = useState('')
  const [queryTimeout, setQueryTimeout] = useState(setTimeout(() => {}))
  const { query, setQuery } = useContext(QueryContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchValue = e.target.value.toLowerCase()
    setSearch(searchValue)
    clearTimeout(queryTimeout)
    // Debounce the query 500ms
    const newQueryTimeout = setTimeout(() => {
      setQuery(searchValue)
    }, 500)
    // Clean the previous setTimeout
    setQueryTimeout(newQueryTimeout)
  }

  function clearSearch(): void {
    setQuery('')
    setSearch((prev) => '')
  }

  useEffect(() => {
    setSearch(query)
  }, [query])

  return { search, handleChange, clearSearch, setSearch }
}
