import React, { useContext } from 'react'

import { shade } from 'polished'
import { ThemeContext } from 'styled-components'

import { Switch } from '../Switch'
import { Container } from './styles'

type Props = {
  toggleTheme: () => void
}

const Header = (props: Props) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      Hello World
      <Switch
        switchWhen={title === 'dark'}
        onClick={props.toggleTheme}
        width={40}
        height={10}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  )
}

export default Header
