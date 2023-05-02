import { useContext } from 'react'

import { CartContext } from '@/context/CartContext'

import { ShoppingCart } from 'phosphor-react'

import { formatPrices } from '@/utils/format-prices'
import {
  ButtonsContainer,
  CartButton,
  CoffeeItem,
  CoffeeListContainer,
  PurchaseContainer,
  QuantityContainer,
  Tag,
  TagContainer,
} from './styles'

export const CoffeeList = () => {
  const {
    coffees,
    handleAddToCart,
    handleDecrementCoffeeQuantity,
    handleIncrementCoffeeQuantity,
    getCoffeeQuantity,
  } = useContext(CartContext)

  return (
    <CoffeeListContainer>
      {coffees.map((coffee) => (
        <CoffeeItem key={coffee.id}>
          <img src={`src/assets/coffees/${coffee.image}`} alt={coffee.name} />
          <TagContainer>
            {coffee.types?.map((type) => (
              <Tag key={type}>{type}</Tag>
            ))}
          </TagContainer>
          <h3>{coffee.name}</h3>
          <p>{coffee.description}</p>
          <PurchaseContainer>
            <p>{formatPrices(coffee.price)}</p>

            <ButtonsContainer>
              <QuantityContainer>
                <button
                  type="button"
                  onClick={() => handleDecrementCoffeeQuantity(coffee.id)}
                >
                  -
                </button>
                <span>{getCoffeeQuantity(coffee.id)}</span>
                <button
                  type="button"
                  onClick={() => handleIncrementCoffeeQuantity(coffee.id)}
                >
                  +
                </button>
              </QuantityContainer>
              <CartButton
                type="button"
                onClick={() => handleAddToCart(coffee.id)}
              >
                <ShoppingCart size={16} weight="fill" />
              </CartButton>
            </ButtonsContainer>
          </PurchaseContainer>
        </CoffeeItem>
      ))}
    </CoffeeListContainer>
  )
}
