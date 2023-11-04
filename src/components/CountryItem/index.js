import {List, CountryName, Button} from './styledComponents'

const CountryItem = props => {
  const {listItems, onChangeVisit} = props
  const {id, name, isVisited} = listItems
  const state = isVisited ? 'Visited' : 'Visit'

  const visitChange = () => {
    onChangeVisit(id)
  }

  return (
    <List>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <p style={{color: '#94a3b8'}}>Visited</p>
      ) : (
        <Button type="button" state={state} onClick={visitChange}>
          {state}
        </Button>
      )}
    </List>
  )
}
export default CountryItem
