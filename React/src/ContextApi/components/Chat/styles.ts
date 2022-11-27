import styled from 'styled-components'

export const ChatStyle = styled.div`
  width: 50%;
  height: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-right: 10px;
  border-radius: 0.25rem;
  background: #909cc2;

  ::-webkit-scrollbar {
    display: none;
  }

  ul {
    width: 90%;
  }

  button {
    position: sticky;
    bottom: 0;
  }
`
