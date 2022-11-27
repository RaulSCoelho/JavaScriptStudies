import React from 'react'

import { Box } from '../components/Box'
import { Chat } from '../components/Chat'
import { UserList } from '../components/UserList'

function ContextApi() {
  return (
    <Box>
      <Chat />
      <UserList />
    </Box>
  )
}

export default ContextApi
