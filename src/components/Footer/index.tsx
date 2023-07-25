import {
  Copy,
  FooterContaine,
  LogoFooter,
  SocialIcon,
  Socialcontainer
} from './styles'

import Facebook from '../../assets/images/face.png'
import Tt from '../../assets/images/twit.png'
import Insta from '../../assets/images/insta.png'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <FooterContaine>
    <LogoFooter src={logo} alt="" />
    <Socialcontainer>
      <SocialIcon src={Facebook} alt="" />
      <SocialIcon src={Tt} alt="" />
      <SocialIcon src={Insta} alt="" />
    </Socialcontainer>
    <Copy>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.{' '}
    </Copy>
  </FooterContaine>
)

export default Footer
