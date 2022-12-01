import React from 'react'
import { Provider } from 'react-redux'

import Sidebar from '../components/Sidebar'
import Video from '../components/Video'
import store from '../store'

export const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '100vh'
        }}
      >
        <Video />
        <Sidebar />
      </div>
    </Provider>
  )
}
