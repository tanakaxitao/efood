import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import RestList from '../../components/ProducstList'
import { DadosRestaurante } from '../../components/CardRestaurants'

const Home = () => {
  const [restaurante, setRestaurante] = useState<DadosRestaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <Header></Header>
      <RestList restaurants={restaurante}></RestList>
    </>
  )
}

export default Home
