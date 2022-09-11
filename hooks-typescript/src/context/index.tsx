import React from 'react'

import { CartProvider } from './CartContext'

const AppContext = ({ children }) => {
  return <CartProvider>{children}</CartProvider>
}

export default AppContext
