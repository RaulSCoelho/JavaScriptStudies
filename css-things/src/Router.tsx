import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Positioning } from 'pages/Positioning'
import { WritingMode } from 'pages/WritingMode'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<WritingMode />} />
      <Route path="/positioning" element={<Positioning />} />
    </Routes>
  )
}
