import styled from 'styled-components'

interface TitleProps {
  fontSize?: number
}

export const Title = styled.h1<TitleProps>`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};

  span {
    font-size: 12px;
  }
`

export const TitleSmall = styled(Title)`
  color: #fff;
  font-size: 16px;
`
