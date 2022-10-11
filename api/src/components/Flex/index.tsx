import React from 'react'

import { FlexStyle } from './styles'

interface Props {
  children?: React.ReactNode
  style?: object
}

export const Flex: React.FC<Props> = ({ children, style }) => {
  return <FlexStyle style={style}>{children}</FlexStyle>
}
