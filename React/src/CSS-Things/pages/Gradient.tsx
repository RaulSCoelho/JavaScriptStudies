import React from 'react'

import styled from 'styled-components'

export const Gradient: React.FC = () => {
  return (
    <Flex>
      <h1>iPhone 14 Pro.</h1>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 10rem;
    background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    pointer-events: none;
    opacity: 0;
    animation: fade 1s ease-in 1;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
