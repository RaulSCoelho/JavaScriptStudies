import React, { useContext } from 'react'
import Switch from 'react-switch'

import { shade } from 'polished'
import { ThemeContext } from 'styled-components'

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
        onChange={props.toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  )
}

export default Header
