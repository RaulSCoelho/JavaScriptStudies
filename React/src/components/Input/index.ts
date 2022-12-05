import { Property } from 'csstype'
import { shade } from 'polished'
import styled from 'styled-components'

export interface StyleProps {
  width?: Property.Width
  height?: Property.Height
  fontSize?: Property.FontSize
  textAlign?: Property.TextAlign
}

export const Input = styled.input<StyleProps>`
  background-color: ${shade(0.1, '#353640')};
  color: #f8f8f2;
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  font-size: ${props => props.fontSize || '12pt'};
  text-align: ${props => props.textAlign};
  padding: 5px;
  border: 0;
  border-radius: 0.25rem;
`
