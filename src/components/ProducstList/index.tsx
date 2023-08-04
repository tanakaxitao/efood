import Restaurant, {
  DadosRestaurante,
  getDescription
} from '../../components/CardRestaurants'
import { List, ListContainer } from './styles'

type Props = {
  restaurants: DadosRestaurante[]
}

const RestList = ({ restaurants }: Props) => (
  <ListContainer className="container">
    <List>
      {restaurants.map((restaurante) => (
        <li key={restaurante.id}>
          <Restaurant
            id={restaurante.id}
            titulo={restaurante.titulo}
            tipo={restaurante.tipo}
            descricao={getDescription(restaurante.descricao)}
            avaliacao={restaurante.avaliacao}
            capa={restaurante.capa}
          ></Restaurant>
        </li>
      ))}
    </List>
  </ListContainer>
)
export default RestList
