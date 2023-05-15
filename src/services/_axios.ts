import { getServiceUrl, tServiceUrls } from './urls'
import { anyObject } from '@types'
import axiosDefault, { AxiosResponse } from 'axios'

const axios = axiosDefault.create({
  // baseURL:BaseUrl,
})

type tAxios = (baseUrl: tServiceUrls) => {
  get: <TRes = anyObject>(url: string) => Promise<AxiosResponse<TRes, any>>
  put: <TRes = anyObject, TReq = anyObject>(
    url: string,
    data: TReq,
    configs?: anyObject,
  ) => Promise<AxiosResponse<TRes, any>>
  patch: <TRes = anyObject, TReq = anyObject>(
    url: string,
    data: TReq,
    configs?: anyObject,
  ) => Promise<AxiosResponse<TRes, any>>
  post: <TRes = anyObject, TReq = anyObject>(
    url: string,
    data: TReq,
    configs?: anyObject,
  ) => Promise<AxiosResponse<TRes, any>>
  delete: <TRes = anyObject>(url: string) => Promise<AxiosResponse<TRes, any>>
}

export const Axios: tAxios = baseUrl => ({
  get: url => axios.get(`${getServiceUrl(baseUrl)}/${url}`),
  put: (url, data, configs) => axios.put(`${getServiceUrl(baseUrl)}/${url}`, data, configs),
  patch: (url, data, configs) => axios.patch(`${getServiceUrl(baseUrl)}/${url}`, data, configs),
  post: (url, data, configs) => axios.post(`${getServiceUrl(baseUrl)}/${url}`, data, configs),
  delete: url => axios.delete(`${getServiceUrl(baseUrl)}/${url}`),
})

export default axios
