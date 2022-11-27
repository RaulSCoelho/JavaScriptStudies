import React from 'react'

import { Cart } from 'Hooks-Typescript/components/Cart'
import { Todos } from 'Hooks-Typescript/components/Todos'

export const HooksTS: React.FC = () => {
  return (
    <div>
      <Cart />
      <Todos />
    </div>
  )
}
