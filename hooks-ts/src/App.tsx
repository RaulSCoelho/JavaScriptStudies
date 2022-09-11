import React, { useState } from 'react'

interface User {
  name: string
  login: string
  avatar_url: string
}

const App: React.FC = () => {
  const [user, setUser] = useState()

  async function loadData() {
    const response = await fetch('https://api.github.com/RaulSCoelho')
    const data = await response.json()

    setUser(data)
  }

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  )
}

export default App
