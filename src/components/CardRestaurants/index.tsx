import {
  Button,
  Card,
  CardContainer,
  Description,
  RestaurantBanner,
  Tag,
  Title,
  TitleContainer
} from './styles'
import Restaurant1 from '../../assets/images/image1.png'
import star from '../../assets/images/star.png'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  category: string
  description: string
  rate: string
}

const Restaurant = ({ title, category, description, rate }: Props) => (
  <Card>
    <RestaurantBanner src={Restaurant1} alt="" />
    <CardContainer>
      <TitleContainer>
        <Title>titulo</Title>
        <span>
          nota
          <span>
            <img src={star} alt="star" />
          </span>
        </span>
      </TitleContainer>
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <Link to="/restaurant">
        {' '}
        <Button>Saiba mais</Button>{' '}
      </Link>
    </CardContainer>
    <Tag>Italiana</Tag>
  </Card>
)

export default Restaurant
