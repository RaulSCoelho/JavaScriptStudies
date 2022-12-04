import { Property } from 'csstype'
import styled from 'styled-components'

export interface StyleProps {
  width?: Property.Width
  height?: Property.Height
  direction?: Property.FlexDirection
  alignItems?: Property.AlignItems
  gap?: Property.Gap
  flexFlow?: Property.FlexFlow
  justifyContent?: Property.JustifyContent
}

export const Flex = styled.div<StyleProps>`
  display: flex;
  overflow: auto;
  gap: ${props => props.gap};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => props.direction || 'column'};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || 'center'};
  flex-flow: ${props => props.flexFlow};
`
