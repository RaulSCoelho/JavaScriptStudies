import React, { useContext } from 'react'

import Head from 'next/head'
import { useTheme } from 'styled-components'

import { Flex } from '../components/Flex'
import { Switch } from '../components/Switch'
import { UserContext } from '../context/UserContext'
import useSettings from '../hooks/useSettings'

const Home: React.FC = () => {
  const { title } = useTheme()
  const { onToggleTheme } = useSettings()
  const { user } = useContext(UserContext)

  return (
    <Flex>
      <Head>
        <title>Homepage</title>
      </Head>

      <Switch
        switchWhen={title !== 'Light Mode'}
        onClick={onToggleTheme}
        width={40}
        height={20}
        handleDiameter={16}
        offColor="#4566"
      />
      <h1>{`Hello, ${user?.name}!`}</h1>
      <img src={user?.avatar_url} alt="" />
    </Flex>
  )
}

export default Home
