import axios from 'axios'
import { parseCookies } from 'nookies'

export function getApiClient(ctx?: any) {
  const { 'next-mongodb-token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3000'
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
