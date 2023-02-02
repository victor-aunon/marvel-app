import { useContext } from 'react'
import { QueryContext } from '../../../context'

export function DisplayQueryComponent(): JSX.Element {
  const { query } = useContext(QueryContext)

  return <p>{query}</p>
}
