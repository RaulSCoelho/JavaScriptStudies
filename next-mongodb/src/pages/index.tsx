import React from 'react'

import { Flex, Switch } from 'components'
import Card from 'components/Card'
import { useSettings } from 'hooks'
import { Room } from 'infra/types/airbnb'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { api } from 'services'
import { useTheme } from 'styled-components'

interface Props {
  rooms: Room[]
}

const Home: NextPage<Props> = ({ rooms }) => {
  const { title } = useTheme()
  const { onToggleTheme } = useSettings()

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
      <Flex width="70%" flexFlow="wrap" justifyContent="center">
        {rooms.map(room => (
          <Card key={room._id} room={room} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const rooms = await api.get('api/v1/airbnb/rooms')

  return {
    props: { rooms: rooms.data }
  }
}
