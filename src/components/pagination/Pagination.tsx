import { PaginationContainer } from './PaginationContainer.styles'

interface PaginationProps {
  pages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export function Pagination({
  pages,
  currentPage,
  setCurrentPage,
}: PaginationProps): JSX.Element {
  return (
    <PaginationContainer>
      {[...Array(pages).keys()].map((index) => (
        <div
          key={index}
          className={
            currentPage === index
              ? 'pagination-element active'
              : 'pagination-element'
          }
          onClick={() => {
            setCurrentPage((prev) => index)
          }}
        >
          {index + 1}
        </div>
      ))}
    </PaginationContainer>
  )
}
