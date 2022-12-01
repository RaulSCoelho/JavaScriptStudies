import { Property } from 'csstype'
import styled from 'styled-components'

interface TitleProps {
  fontSize?: Property.FontSize
}

export const Title = styled.h1<TitleProps>`
  color: #f00;
  font-size: ${props => props.fontSize};

  span {
    font-size: 12px;
  }
`

export const TitleSmall = styled(Title)`
  color: #fff;
  font-size: 16px;
`
