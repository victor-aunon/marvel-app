import { useContext, useState } from 'react'
import { QueryContext } from '../../../context'

export function SetQueryComponent(): JSX.Element {
  const { setQuery } = useContext(QueryContext)
  const [text, setText] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = e.target.value
    setText(value)
    setQuery(value)
  }

  return (
    <input placeholder="Enter a text" value={text} onChange={handleChange} />
  )
}
