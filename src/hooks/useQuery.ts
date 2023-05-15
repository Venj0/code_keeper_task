import { tAxiosError } from 'types'
import { useCallback, useState } from 'react'

interface iFetchStatus {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  isFetched: boolean
  error: string
}

export const useQuery = <TRes = any, TReq = null>(
  callback: (data: TReq) => Promise<TRes>,
  onError?: (error: tAxiosError) => void,
): [(data: TReq) => Promise<TRes>, iFetchStatus] => {
  const [status, setStatus] = useState<iFetchStatus>({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: '',
    isFetched: false,
  })

  const fetch = useCallback(async (data: TReq) => {
    setStatus(c => ({ ...c, isLoading: true, isFetched: true }))
    try {
      const res = await callback(data)
      setStatus(c => ({ ...c, isLoading: false, isSuccess: true }))
      return res
    } catch (e: any) {
      const { response } = e as tAxiosError
      if (response?.data.statusCode === 432) {
      }
      setStatus(c => ({ ...c, isLoading: false, isError: true, error: e.message }))
      if (onError) onError(e as tAxiosError)

      return
    }
  }, [])

  return [fetch as (data: TReq) => Promise<TRes>, status]
}
