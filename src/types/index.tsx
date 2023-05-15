import { AxiosError } from 'axios'
import { Dispatch, SetStateAction } from 'react'

export type voidFn<T = any> = (arg: T) => void
export type voidFnPromise<T = any> = (arg: T) => Promise<void>
export type voidFnE = () => void
export type voidFnEPromise = () => Promise<void>

export type resFn<T = any, P = any> = (arg: T) => P
export type resFnPromise<T = any, P = any> = (arg: T) => Promise<P>

export type resFnE<P = any> = () => P
export type resFnEPromise<P = any> = () => Promise<P>

export type anyObject = { [K: string]: any }

export type tSetState<T = any> = Dispatch<SetStateAction<T>>

// eslint-disable-next-line
export type emptyObject = {}

export type tLoadingStatus = {
  isLoading: boolean
  loadingStatus?: string
}

export type tAxiosError = AxiosError<{ statusCode: number; message: string }>
