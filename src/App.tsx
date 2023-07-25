import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'
import GlobalStyle from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="container"></div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
