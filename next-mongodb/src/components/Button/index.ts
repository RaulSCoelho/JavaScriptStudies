import { Property } from 'csstype'
import { shade } from 'polished'
import styled from 'styled-components'

export interface StyleProps {
  backgroundColor?: Property.BackgroundColor
  width?: Property.Width
  height?: Property.Height
  border?: Property.Border
  borderRadius?: Property.BorderRadius
}

export const Button = styled.button<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  height: ${props => props.height || '32px'};
  border: ${props => props.border || 'none'};
  border-radius: ${props => props.borderRadius || '20px'};

  &:hover {
    background-color: ${props => shade(0.2, props.backgroundColor || '#fff')};
  }
`
