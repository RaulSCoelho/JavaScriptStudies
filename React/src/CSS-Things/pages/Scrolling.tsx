import React from 'react'

import styled from 'styled-components'

export const Scrolling: React.FC = () => {
  return (
    <Flex>
      <div className="box">
        <div className="number number1">1</div>
        <div className="number number2">2</div>
        <div className="number number3">3</div>
        <div className="number number4">4</div>
      </div>
    </Flex>
  )
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .box {
    display: flex;
    width: 20rem;
    height: 20rem;
    overflow: auto;

    //Scroll part
    scroll-snap-type: x proximity;

    .number {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 20rem;
      font-size: 10rem;

      //Scroll part
      scroll-snap-align: center;
    }

    .number1 {
      background-color: #966eed;
    }

    .number2 {
      background-color: #ff79c6;
    }

    .number3 {
      background-color: #f44336;
    }

    .number4 {
      background-color: #8be9fd;
    }
  }
`
