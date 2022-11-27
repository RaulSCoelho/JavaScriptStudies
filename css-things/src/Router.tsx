import React from 'react'
import { Route, Routes } from 'react-router-dom'

import ContextApi from 'ContextApi/pages/ContextApi'
import { Gradient } from 'CSS-Things/pages/Gradient'
import { ImageCSS } from 'CSS-Things/pages/ImageCSS'
import { ObjectFit } from 'CSS-Things/pages/ObjectFit'
import { Positioning } from 'CSS-Things/pages/Positioning'
import { Resize } from 'CSS-Things/pages/Resize'
import { Scrolling } from 'CSS-Things/pages/Scrolling'
import { Truncate } from 'CSS-Things/pages/Truncate'
import { WritingMode } from 'CSS-Things/pages/WritingMode'
import { HooksTS } from 'Hooks-Typescript/pages/HooksTS'
import { MemoCallback } from 'Memo&Callback/pages/MemoCallback'
import { ReactHooks } from 'React-Hooks/pages/ReactHooks'

export function Router() {
  return (
    <Routes>
      {/* ReactHooks */}
      <Route path="react-hooks" element={<ReactHooks />} />
      {/* Memo&Callback */}
      <Route path="memo-callback" element={<MemoCallback />} />
      {/* HooksTS */}
      <Route path="hooks-ts" element={<HooksTS />} />
      {/* ContextApi */}
      <Route path="context-api" element={<ContextApi />} />
      {/* CSS THINGS */}
      <Route path="css-things/" element={<ObjectFit />} />
      <Route path="css-things/gradient" element={<Gradient />} />
      <Route path="css-things/truncate" element={<Truncate />} />
      <Route path="css-things/resize" element={<Resize />} />
      <Route path="css-things/scrolling" element={<Scrolling />} />
      <Route path="css-things/image" element={<ImageCSS />} />
      <Route path="css-things/writingMode" element={<WritingMode />} />
      <Route path="css-things/positioning" element={<Positioning />} />
    </Routes>
  )
}
