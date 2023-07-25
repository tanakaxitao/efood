import styled from 'styled-components'

export const ListContainer = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 32px;
  column-gap: 32px;
  margin-bottom: 120px;
  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
