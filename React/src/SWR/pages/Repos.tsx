import React, { useCallback } from 'react'

import { mutate as mutateGlobal } from 'swr'

import { Flex } from '../../components/Flex'
import { useAxios } from '../hooks/useAxios'

const Repos: React.FC = () => {
  const { data: repos, mutate } = useAxios<any[]>('users/RaulSCoelho/repos')

  const changeName = useCallback(
    (id: number) => {
      let oldRepoName
      let changedRepo
      const updatedRepos = repos?.map(repo => {
        if (repo.id === id) {
          oldRepoName = repo.name
          changedRepo = { ...repo, name: 'changed' }
          return changedRepo
        }
        return repo
      })

      // false serve para nao realizar uma nova chamada a api
      mutate(updatedRepos, false)
      // serve para atualizar o cache global
      mutateGlobal(`repos/RaulSCoelho/${oldRepoName}`, changedRepo)
    },
    [mutate, repos]
  )

  if (!repos) {
    return (
      <Flex height="100vh" justifyContent="center" gap="10px">
        <h1>Carregando...</h1>
      </Flex>
    )
  }

  return (
    <Flex height="100vh" justifyContent="center" gap="10px">
      <h1>Repositórios do GitHub</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} style={{ margin: '5px 0' }}>
            <a href={`repos/${repo.name}`}>{repo.name}</a>
            <button onClick={() => changeName(repo.id)}>change name</button>
          </li>
        ))}
      </ul>
    </Flex>
  )
}

export default Repos
