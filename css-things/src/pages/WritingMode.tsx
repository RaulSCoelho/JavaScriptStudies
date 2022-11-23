import React from 'react'

import { faker } from '@faker-js/faker'
import styled from 'styled-components'

export const WritingMode: React.FC = () => {
  return (
    <Flex>
      <div className="container">
        <h1>Vertical Text</h1>
        <p>{faker.lorem.lines(4)}</p>
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

  .container {
    display: flex;
    background-color: #d9f0ff;
    border-radius: 18px;
    box-shadow: 4px 6px 5px 2px rgba(0, 0, 0, 0.2);
    width: 20rem;
    padding: 20px;
    color: black;

    //Write Mode
    h1 {
      writing-mode: vertical-lr;
    }
  }
`
