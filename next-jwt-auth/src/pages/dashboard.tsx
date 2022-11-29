import { useContext } from 'react'

import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import { Flex } from '../components/Flex'
import { Navbar } from '../components/Navbar'
import { AuthContext } from '../context/AuthContext'
import { getApiClient } from '../services/axios'

export default function Dashboard() {
  const { user } = useContext(AuthContext)

  // useEffect(() => {
  //   api.get('/users').catch(err => console.log(err))
  // }, [])

  return (
    <Flex>
      <Navbar />
      <div>
        <h1>Hello, {user?.name || 'Anonymous User'}!</h1>
      </div>
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  try {
    const apiClient = getApiClient(ctx)
    const { 'nextauth-token': token } = parseCookies(ctx)

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    jwt.verify(token, 'TOKEN_SECRET')

    apiClient.get('/users').catch(err => console.log(err))

    return {
      props: {},
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}
