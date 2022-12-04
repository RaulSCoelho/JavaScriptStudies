import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background: ${props => props.theme.colors.background};
    font: 400 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    outline: none;
  }

  #__next {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
`
