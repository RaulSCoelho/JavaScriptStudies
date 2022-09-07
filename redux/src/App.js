import { Provider } from 'react-redux'

import Sidebar from './components/Sidebar'
import Video from './components/Video'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Video />
        <Sidebar />
      </div>
    </Provider>
  )
}

export default App
