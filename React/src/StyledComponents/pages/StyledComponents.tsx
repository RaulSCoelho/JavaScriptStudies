import React from 'react'

import { Title, TitleSmall } from './styles'

export const StyledComponents: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Title fontSize={'30px'}>
        Hello, World!
        <br />
        <span>Text bem menor</span>
      </Title>

      <TitleSmall>Menor</TitleSmall>
    </div>
  )
}
