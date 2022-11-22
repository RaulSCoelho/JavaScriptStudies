import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Positioning } from 'pages/Positioning'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Positioning />} />
    </Routes>
  )
}
