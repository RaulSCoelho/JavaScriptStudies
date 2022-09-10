import { Box } from '../components/Box'
import { Chat } from '../components/Chat'
import { UserList } from '../components/UserList'

function Home() {
  return (
    <Box>
      <Chat />
      <UserList />
    </Box>
  )
}

export default Home
