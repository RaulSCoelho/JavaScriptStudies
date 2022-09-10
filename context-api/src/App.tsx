import { ChatProvider } from './context/ChatContext'
import Home from './pages/Home'
import GlobalStyle from './styles/global'

function App() {
  return (
    <ChatProvider>
      <Home />
      <GlobalStyle />
    </ChatProvider>
  )
}

export default App
