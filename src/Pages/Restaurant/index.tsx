import Banner from '../../components/Banner'
import ProfileHeader from '../../components/ProfileHeader'
import { useParams } from 'react-router'
import ProductList from '../../components/RestList'
import { useGetCurrentRestQuery } from '../../services/api'

const Restaurant = () => {
  const { id } = useParams()
  const { data: currentRest } = useGetCurrentRestQuery(id!)
  if (currentRest) {
    return (
      <>
        <ProfileHeader></ProfileHeader>
        <Banner
          capa={currentRest.capa}
          tipo={currentRest.tipo}
          titulo={currentRest.titulo}
        ></Banner>
        <ProductList />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Restaurant
