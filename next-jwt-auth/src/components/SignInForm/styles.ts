import styled from 'styled-components'

export const SignInFormStyle = styled.div`
  color: #1a202c;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    font-size: 12pt;
    width: 100%;
    height: 35px;
    padding: 5px;
    border: 1px solid #e2e8f0;
  }

  input:focus {
    background-color: #f8fbfa;
  }

  input:last-child {
    border-top: 0;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  input:first-child {
    border-bottom: 0;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  button {
    background-color: #6366f1;
    color: #f8fbfa;
    width: 100%;
    height: 35px;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`
