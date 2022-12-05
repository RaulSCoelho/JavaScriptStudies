import React from 'react'
import { useParams } from 'react-router-dom'

import { Flex } from '../../components/Flex'
import { useAxios } from '../hooks/useAxios'

const RepoDetail: React.FC = () => {
  const { repoName } = useParams()
  const { data: repo } = useAxios<any[]>(`repos/RaulSCoelho/${repoName}`)

  if (!repo) {
    return (
      <Flex height="100vh" justifyContent="center" gap="10px">
        <h1>Carregando...</h1>
      </Flex>
    )
  }

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      gap="10px"
      style={{ overflow: 'auto' }}
    >
      <textarea
        style={{
          backgroundColor: '#353640',
          color: '#f8f8f2',
          width: '60%',
          height: '90%'
        }}
        value={JSON.stringify(repo, null, 2)}
        readOnly
      />
    </Flex>
  )
}

export default RepoDetail
