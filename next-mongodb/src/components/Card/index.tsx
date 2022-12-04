import React from 'react'

import { api } from 'api'
import { Button } from 'components/Button'
import { Room } from 'infra/types/airbnb'

import { CardStyle } from './styles'

interface Props {
  room: Room
}

const Card: React.FC<Props> = ({ room }) => {
  const price = Number(room.price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  const book = async room => {
    const response = await api.get(
      `api/v1/airbnb/book?room_id=${room._id}&guest=Raul`
    )
    console.log(response.data)
  }

  return (
    <CardStyle key={room._id}>
      <img src={room.image} alt="image" />
      <h4>{room.name}</h4>
      <p>{room.summary}</p>
      <h4>{price}</h4>
      <Button width="33.33%" onClick={() => book(room)}>
        Book
      </Button>
    </CardStyle>
  )
}
export default Card
