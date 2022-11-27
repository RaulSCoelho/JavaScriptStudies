import React, { createContext, useCallback, useEffect, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
}

interface Cart {
  products: Product[]
  shipping_price?: number
}

interface CartContextType {
  cart: Cart
  addProduct: (product: Product) => void
}

const CartContext = createContext<CartContextType>(null)

export default CartContext

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState<Cart>({
    products: [{ id: 1, name: 'Carne', price: 50 }],
  })

  useEffect(() => {
    setCart(state => {
      const newCart: Cart = {
        products: [...state.products, { id: 2, name: 'Agua', price: 3 }],
        shipping_price: state.shipping_price,
      }
      return newCart
    })
  }, [])

  const addProduct = useCallback((product: Product) => {
    setCart(state => {
      const newCart: Cart = {
        products: [...state.products, product],
        shipping_price: state.shipping_price,
      }
      return newCart
    })
  }, [])

  const contextData = {
    cart,
    addProduct,
  }

  return (
    <CartContext.Provider value={contextData}>{children}</CartContext.Provider>
  )
}
