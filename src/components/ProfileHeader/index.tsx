import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { Cart, Header, HeaderContainer, LinkHome, Logo } from './styles'

const ProfileHeader = () => (
  <Header>
    <HeaderContainer className="container">
      <LinkHome>Restaurantes</LinkHome>
      <Link to="/">
        <Logo src={logo}></Logo>
      </Link>
      <Cart>0 produto(s) no carrinho</Cart>
    </HeaderContainer>
  </Header>
)

export default ProfileHeader
