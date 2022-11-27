import React from 'react'
import { Provider } from 'react-redux'

import Sidebar from 'Redux/components/Sidebar'
import Video from 'Redux/components/Video'
import store from 'Redux/store'

export const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '100vh',
        }}
      >
        <Video />
        <Sidebar />
      </div>
    </Provider>
  )
}
