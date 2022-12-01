import axios from 'axios'

export function getApiClient(baseURL: string) {
  const api = axios.create({
    baseURL
  })

  return api
}
