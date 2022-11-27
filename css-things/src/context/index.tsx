import React from 'react'

import { ChatProvider } from 'ContextApi/context/ChatContext'

const AppContext = ({ children }) => {
  return <ChatProvider>{children}</ChatProvider>
}

export default AppContext
