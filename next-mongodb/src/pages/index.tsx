import React from 'react'

import { api } from 'api'
import { Flex, Switch } from 'components'
import { useSettings } from 'hooks'
import { connectToDatabase } from 'infra/mongodb'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'

interface Props {
  rooms: any
}

const Home: NextPage<Props> = ({ rooms }) => {
  const { title } = useTheme()
  const { onToggleTheme } = useSettings()

  const book = async room => {
    const response = await api.get(
      `api/v1/airbnb/book?room_id=${room._id}&guest=Raul`
    )
    console.log(response.data)
  }

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
      {rooms.map(room => (
        <Flex
          key={room._id}
          width="300px"
          style={{ margin: '10px', padding: '10px', border: '1px solid black' }}
        >
          <h4 style={{ margin: '5px 0' }}>{room.name}</h4>
          <button onClick={() => book(room)}>Book</button>
        </Flex>
      ))}
    </Flex>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { db } = await connectToDatabase()

  const roomsFromDB = await db
    .collection('listingsAndReviews')
    .find({})
    .limit(10)
    .project({
      _id: 1,
      name: 1,
      image: 1,
      address: 1,
      sumary: 1,
      guests: 1,
      price: 1,
      cleaning_fee: 1
    })
    .toArray()

  const rooms = JSON.parse(JSON.stringify(roomsFromDB))

  const roomsValuesModified = rooms.map(room => {
    if (room.price) {
      const price = JSON.parse(JSON.stringify(room.price))
      room.price = price.$numberDecimal
    }

    if (room.cleaning_fee) {
      const cleaning_fee = JSON.parse(JSON.stringify(room.cleaning_fee))
      room.cleaning_fee = cleaning_fee.$numberDecimal
    }

    return room
  })

  return {
    props: { rooms: roomsValuesModified }
  }
}
