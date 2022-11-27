import styled from 'styled-components'

export const UserListStyle = styled.div`
  width: 25%;
  height: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 0.25rem;
  background: #084887;

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
