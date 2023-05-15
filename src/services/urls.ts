export const BaseApiUrl = `https://images-api.nasa.gov`

export type tServiceUrls = 'search'

export const getServiceUrl = (serviceName: tServiceUrls): string => `${BaseApiUrl}/${serviceName}`
