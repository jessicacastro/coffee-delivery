import { useContext } from 'react'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContext } from '@/context/CartContext'
import logoImg from '@/assets/logo.svg'

import { Cart, HeaderContainer, Location, Logo, Menu } from './styles'

export const Header = () => {
  const { getTotalItemsOnCart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Logo src={logoImg} />

      <Menu>
        <Location>
          <MapPin size={16} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <ShoppingCart size={16} weight="fill" />
          <span>{getTotalItemsOnCart()}</span>
        </Cart>
      </Menu>
    </HeaderContainer>
  )
}
