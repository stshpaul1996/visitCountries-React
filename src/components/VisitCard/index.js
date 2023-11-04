import {
  CardListItem,
  Image,
  VisitName,
  Remove,
  Container,
} from './styledComponents'

const VisitCard = props => {
  const {card, onRemoveVisit} = props
  const {id, imageUrl, name} = card

  const onRemove = () => {
    onRemoveVisit(id)
  }

  return (
    <CardListItem>
      <Image src={imageUrl} alt="thumbnail" />
      <Container>
        <VisitName>{name}</VisitName>
        <Remove type="button" onClick={onRemove}>
          Remove
        </Remove>
      </Container>
    </CardListItem>
  )
}
export default VisitCard
