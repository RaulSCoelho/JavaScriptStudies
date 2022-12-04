import styled from 'styled-components'

export const CardStyle = styled.div`
  width: 300px;
  height: 400px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 4px 4px rgba(0, 0, 0, 0.3);

  h4 {
    margin: 5px 0;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: calc(0.6 * 300px);
    height: calc(0.6 * 300px);
    border-radius: 10px;
  }
`
