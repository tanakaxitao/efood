import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  padding: 8px;
  background-color: ${colors.rose};
  width: 320px;
  height: 339px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ProductImg = styled.img`
  width: 304px;
  height: 167px;
  margin-bottom: 8px;
`
export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  color: ${colors.beige};
`

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${colors.beige};
`

export const AddCart = styled.button`
  background-color: ${colors.beige};
  color: ${colors.rose};
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 4px;
  font-weight: bold;
  font-size: 14px;
`
