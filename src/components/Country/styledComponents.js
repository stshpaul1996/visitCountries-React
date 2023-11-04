import styled from 'styled-components'

export const CountryContainer = styled.div`
  min-height: 100vh;
  background-color: #161624;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`
export const Countries = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
  font-weight: 300;
`
export const CountryNamesList = styled.ul`
  padding-left: 0;
  list-style: none;
  border: 1px solid #94a3b8;
  border-radius: 5px;
  height: 40vh;
  overflow-y: scroll;
`
export const CountryCardList = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoVisitContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVisitText = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 400;
`
