import { useEffect, useState } from 'react'
import { FcLike } from 'react-icons/fc'

import { FETCH } from '../../services/fetch'

export default function Repositories() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await FETCH.get(
        'https://api.github.com/users/RaulSCoelho/repos',
        false
      )
      setRepositories(response)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite)

    document.title = `❤ ${filtered.length}`
  }, [repositories])

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    })

    setRepositories(newRepositories)
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite ? <FcLike style={{ marginLeft: '10px' }} /> : null}
          <button
            onClick={() => handleFavorite(repo.id)}
            style={{ margin: '10px' }}
          >
            {repo.favorite ? 'Unfavorite' : 'Favorite'}
          </button>
        </li>
      ))}
    </ul>
  )
}
