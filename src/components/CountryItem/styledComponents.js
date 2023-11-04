import styled from 'styled-components'

export const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #94a3b8;
  padding: 0 20px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: 400;
`
export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: ${props =>
    props.state === 'Visited' ? 'transparent' : '#3b82f6'};
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  padding: ${props => (props.state === 'Visited' ? '5px 10px' : '10px 20px')};
  cursor: pointer;
`
