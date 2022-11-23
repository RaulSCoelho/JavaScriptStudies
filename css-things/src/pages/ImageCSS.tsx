import React from 'react'

import styled from 'styled-components'

export const ImageCSS: React.FC = () => {
  return (
    <Flex>
      <div className="page" id="page1">
        <div className="box">
          <img src="taycan-frente.jpg" alt="taycan" />
          <a href="#page2">Go to page2</a>
        </div>
      </div>
      <div className="page" id="page2">
        <div className="box">
          <img src="taycan-frente.jpg" alt="taycan" />
          <a href="#page1">Go to page1</a>
        </div>
      </div>
    </Flex>
  )
}

const Flex = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  scroll-behavior: smooth;

  .page {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box {
      max-width: 30rem;

      img {
        width: 100%;
        transform: scaleX(-1);
      }

      a {
        display: flex;
        background-color: #d9f0ff;
        justify-content: center;
        width: 100%;
        text-decoration: none;
      }
    }
  }

  #page2 {
    background-color: #2d2d2d;
  }
`
