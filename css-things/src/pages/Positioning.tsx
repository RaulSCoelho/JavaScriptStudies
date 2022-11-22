import React from 'react'

import { Flex } from 'components/Flex'

export const Positioning: React.FC = () => {
  return (
    <Flex>
      <div className="parent">
        Parent
        <div className="child-one">One</div>
        <div className="child-two">Two</div>
        <div className="child-three">Three</div>
      </div>
    </Flex>
  )
}
