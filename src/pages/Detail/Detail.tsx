import { Container } from '../../components/common'
import { DetailCard } from '../../components/detailCard/DetailCard'
import { CommentsBox } from '../../components/CommentsBox'

export function Detail(): JSX.Element {
  return (
    <Container>
      <DetailCard />
      <CommentsBox />
    </Container>
  )
}
