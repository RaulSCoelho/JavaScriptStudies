import useSWR from 'swr'

import { getApiClient } from '../../services/api'

const api = getApiClient('https://api.github.com')

export function useAxios<Data = any>(url: string) {
  const { data, error, mutate } = useSWR<Data>(url, async url => {
    const response = await api.get(url)

    return response.data
  })

  return { data, error, mutate }
}
