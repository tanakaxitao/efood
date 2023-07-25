import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Restaurant from './Pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/restaurant" element={<Restaurant></Restaurant>} />
  </Routes>
)

export default Rotas
