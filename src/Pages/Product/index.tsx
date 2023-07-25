import pizaa from '../../assets/images/pizza.png'
import { AddCart, Card, Description, ProductImg, Title } from './styles'

export type Props = {
  img?: string
  title?: string
  description?: string
}

const Product = ({ img, title, description }: Props) => (
  <Card>
    <ProductImg src={pizaa} alt={pizaa} />
    <Title>Pizza Marguerita</Title>
    <Description>
      A clássica Marguerita: molho de tomate suculento, mussarela derretida,
      manjericão fresco e um toque de azeite. Sabor e simplicidade!
    </Description>
    <AddCart>Adicionar ao carrinho</AddCart>
  </Card>
)

export default Product
