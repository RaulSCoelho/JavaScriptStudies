import styled from 'styled-components'

export const Box = styled.div`
  background: #353640;
  color: #f8f8f2;
  height: auto;
  width: auto;
  display: flex;

  @media (max-width: 724px) {
    flex-direction: column;
  }
`
