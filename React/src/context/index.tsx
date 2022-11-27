import React from 'react'

import { ChatProvider } from 'ContextApi/context/ChatContext'
import { CartProvider } from 'Hooks-Typescript/context/CartContext'

const AppContext = ({ children }) => {
  return (
    <CartProvider>
      <ChatProvider>{children}</ChatProvider>
    </CartProvider>
  )
}

export default AppContext
