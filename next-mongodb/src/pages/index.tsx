import React from 'react'

import { Flex, Switch } from 'components'
import { useSettings } from 'hooks'
import clientPromise from 'infra/mongodb'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'

interface Props {
  isConnected: boolean
}

const Home: NextPage<Props> = ({ isConnected }) => {
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
      {isConnected ? (
        <h2>You are connected to MongoDB</h2>
      ) : (
        <h2>You are NOT connected to MongoDB.</h2>
      )}
    </Flex>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    await clientPromise

    return {
      props: { isConnected: true }
    }
  } catch (err) {
    console.log(err)
    return {
      props: { isConnected: false }
    }
  }
}
