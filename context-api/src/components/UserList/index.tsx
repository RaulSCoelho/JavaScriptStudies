import React, { useState } from 'react'

import { useUserList } from '../../hooks/useUserList'
import { UserListStyle } from './styles'

export const UserList = () => {
  const { connected, onUserConnected } = useUserList()
  const [user, setUser] = useState('')

  function handleConnectUser(name: string) {
    onUserConnected(name)
  }

  return (
    <UserListStyle>
      <strong>User List</strong>
      <br />
      <ul>
        {connected.map((user) => {
          return (
            <li key={user.id}>
              <strong>{user.name}</strong>
              <br />
            </li>
          )
        })}
      </ul>
      <div>
        <input
          type="text"
          onInput={(e) => setUser((e.target as HTMLButtonElement).value)}
          value={user}
          style={{ background: '#333', color: '#f0f0f0' }}
        />
        <button
          onClick={() => handleConnectUser(user)}
          style={{ background: '#333', color: '#f0f0f0' }}
        >
          Add User
        </button>
      </div>
    </UserListStyle>
  )
}
