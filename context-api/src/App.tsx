import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { ChatProvider } from './context/ChatContext'
import Home from './pages/Home'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      <GlobalStyle />
    </ChatProvider>
  )
}

export default App
