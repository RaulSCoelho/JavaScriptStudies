import React from 'react'

import { Cart } from 'components/Cart'
import { Todos } from 'components/Todos'

export const Home: React.FC = () => {
  return (
    <div>
      <Cart />
      <Todos />
    </div>
  )
}
