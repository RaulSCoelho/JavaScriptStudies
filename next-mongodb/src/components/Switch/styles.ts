import { Property } from 'csstype'
import styled from 'styled-components'

interface StyleProps {
  width: number
  height: number
  handleDiameter: number
  backgroundColor: Property.BackgroundColor
}

export const SwitchStyle = styled.div<StyleProps>`
  width: auto;
  height: auto;
  padding: 5px;

  #switch {
    background-color: ${props =>
      props.backgroundColor
        ? props.backgroundColor
        : props.theme.colors.secundary};
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    padding: ${props => (props.height > props.handleDiameter ? '2px' : '0px')};
    border-radius: ${props => `${props.height / 2}px`};
    cursor: pointer;
    position: relative;
  }

  #switchCircle {
    background-color: #ffffff;
    width: ${props => `${props.handleDiameter}px`};
    height: ${props => `${props.handleDiameter}px`};
    border-radius: 50%;
    transition: all 0.25s ease 0s;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .active {
    margin-left: ${props =>
      `${
        props.height > props.handleDiameter
          ? props.width - props.handleDiameter - 4
          : props.width - props.handleDiameter
      }px`};
  }
`
