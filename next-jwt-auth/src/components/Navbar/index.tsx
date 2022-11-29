import React, { useContext } from 'react'

import { AuthContext } from '../../context/AuthContext'
import { NavbarStyle } from './styles'

export const Navbar: React.FC = () => {
  const { user } = useContext(AuthContext)

  return (
    <NavbarStyle>
      <p>Dashboard</p>
      <img src={user?.avatar_url || 'anonymous.png'} alt="" />
    </NavbarStyle>
  )
}
