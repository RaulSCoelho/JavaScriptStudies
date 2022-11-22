import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Gradient } from 'pages/Gradient'
import { ImageCSS } from 'pages/ImageCSS'
import { ObjectFit } from 'pages/ObjectFit'
import { Positioning } from 'pages/Positioning'
import { Resize } from 'pages/Resize'
import { Scrolling } from 'pages/Scrolling'
import { Truncate } from 'pages/Truncate'
import { WritingMode } from 'pages/WritingMode'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<ObjectFit />} />
      <Route path="/gradient" element={<Gradient />} />
      <Route path="/truncate" element={<Truncate />} />
      <Route path="/resize" element={<Resize />} />
      <Route path="/scrolling" element={<Scrolling />} />
      <Route path="/image" element={<ImageCSS />} />
      <Route path="/writingMode" element={<WritingMode />} />
      <Route path="/positioning" element={<Positioning />} />
    </Routes>
  )
}
