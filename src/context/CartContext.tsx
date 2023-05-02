import { ReactNode, createContext, useState } from 'react'
import { coffees } from '@/utils/db/coffees'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartProps {
  id: number
  name: string
  price: number
  quantity: number
}

interface QuantitiesProps {
  id: number
  quantity: number
}

interface CartContextProps {
  cart: CartProps[]
  quantities: QuantitiesProps[]
  coffees: typeof coffees
  handleAddToCart: (id: number) => void
  handleIncrementCoffeeQuantity: (id: number) => void
  handleDecrementCoffeeQuantity: (id: number) => void
  getTotalItemsOnCart: () => number
  getCoffeeQuantity: (id: number) => number
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProps[]>([])
  const [quantities, setQuantities] = useState<QuantitiesProps[]>([])

  const handleAddToCart = (id: number) => {
    const coffee = coffees.find((coffee) => coffee.id === id)

    if (!coffee) return

    const coffeeInCart = cart.find((coffee) => coffee.id === id)
    const coffeeInQuantities = quantities.find((quantity) => quantity.id === id)

    if (!coffeeInCart) {
      setCart([
        ...cart,
        {
          id,
          name: coffee.name,
          price: coffee.price,
          quantity: coffeeInQuantities?.quantity || 0,
        },
      ])
      return
    }

    const updatedCart = cart.map((coffee) => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: coffeeInQuantities?.quantity || 0,
        }
      }

      return coffee
    })

    setCart(updatedCart)
  }

  const handleIncrementCoffeeQuantity = (id: number) => {
    const coffee = coffees.find((coffee) => coffee.id === id)

    if (!coffee) return

    const coffeeInQuantities = quantities.find((quantity) => quantity.id === id)

    if (!coffeeInQuantities) {
      setQuantities([...quantities, { id, quantity: 1 }])
      return
    }

    const updatedQuantities = quantities.map((quantity) => {
      if (quantity.id === id) {
        return {
          ...quantity,
          quantity: quantity.quantity + 1,
        }
      }

      return quantity
    })

    setQuantities(updatedQuantities)
  }

  const handleDecrementCoffeeQuantity = (id: number) => {
    const coffee = coffees.find((coffee) => coffee.id === id)

    if (!coffee) return

    const coffeeInQuantities = quantities.find((quantity) => quantity.id === id)

    if (!coffeeInQuantities) {
      return
    }

    const updatedQuantities = quantities.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
        }
      }

      return item
    })

    setQuantities(updatedQuantities)
  }

  const getCoffeeQuantity = (id: number) => {
    const coffee = coffees.find((coffee) => coffee.id === id)

    if (!coffee) return 0

    const coffeeInQuantities = quantities.find((quantity) => quantity.id === id)

    if (!coffeeInQuantities) return 0

    return coffeeInQuantities.quantity
  }

  const getTotalItemsOnCart = () =>
    cart.reduce((acc, coffee) => {
      return acc + coffee.quantity
    }, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        quantities,
        coffees,
        handleAddToCart,
        handleIncrementCoffeeQuantity,
        handleDecrementCoffeeQuantity,
        getTotalItemsOnCart,
        getCoffeeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
