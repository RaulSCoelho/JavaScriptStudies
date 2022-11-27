import React from 'react'

import styled from 'styled-components'

export const ObjectFit: React.FC = () => {
  return (
    <Flex>
      <div className="box">
        <img src="../thor.jpg" alt="thor" />
      </div>
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

  .box {
    background-color: white;
    width: 25rem;
    height: 40rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
