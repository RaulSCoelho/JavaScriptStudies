import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppContext from 'context'
import { Router } from 'Router'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Router />
      </AppContext>
    </BrowserRouter>
  )
}

export default App
