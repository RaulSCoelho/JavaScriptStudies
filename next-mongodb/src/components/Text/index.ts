import { Property } from 'csstype'
import styled from 'styled-components'

export interface StyleProps {
  width?: Property.Width
  height?: Property.Height
  fontSize?: Property.FontSize
  padding?: Property.Padding
  bold?: boolean
  textAlign?: Property.TextAlign
}

export const Text = styled.p<StyleProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.fontSize || '12pt'};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  padding: ${props => props.padding};
  text-align: ${props => props.textAlign};
`
