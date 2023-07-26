import Banner from '../../components/Banner'
import ProfileHeader from '../../components/ProfileHeader'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { DadosRestaurante } from '../../components/CardRestaurants'
import ProductList from '../../components/RestList'

const Restaurant = () => {
  const { id } = useParams()

  const [currentRest, setCurrentRest] = useState<DadosRestaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCurrentRest(res))
  }, [id])

  if (!currentRest) {
    return <h3>Carregando...</h3>
  }

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

export default Restaurant
