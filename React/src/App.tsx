import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Box } from './components/Box'
import AppContext from './context'
import { Navbar } from './CSS-Things/components/Navbar'
import { Router } from './Router'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  const route = window.location.pathname.split('/')[1]

  return (
    <AppContext>
      <Box>
        <BrowserRouter>
          {route === 'css-things' && <Navbar />}
          <Router />
        </BrowserRouter>
      </Box>
      <GlobalStyle />
    </AppContext>
  )
}

export default App
