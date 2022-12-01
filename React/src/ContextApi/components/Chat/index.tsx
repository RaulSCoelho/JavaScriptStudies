import React, { FormEvent } from 'react'

import { faker } from '@faker-js/faker'

import { useChatMessages } from '../../hooks/useChatMessages'
import { ChatStyle } from './styles'

export const Chat = () => {
  const { messages, onNewMessage } = useChatMessages()

  function handleSendMessage(event: FormEvent) {
    event.preventDefault()

    onNewMessage({
      author: 'Raul Semicek Coelho',
      text: faker.lorem.paragraph()
    })
  }

  return (
    <ChatStyle>
      <strong>Chat Messages</strong>
      <br />
      <ul>
        {messages.map(message => {
          return (
            <li key={message.id}>
              <strong>{message.author}</strong>
              <div>{message.text}</div>
              <br />
            </li>
          )
        })}
      </ul>
      <button
        onClick={handleSendMessage}
        style={{ background: '#333', color: '#f0f0f0' }}
      >
        Send Message
      </button>
    </ChatStyle>
  )
}
