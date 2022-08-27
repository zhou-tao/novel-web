import type { HttpMethodEnum, ResponseTypeEnum } from '@/enums/httpEnum'
import type { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

export type ResponseError = Error | AxiosError

export interface RequestHeaders extends AxiosRequestHeaders {
  Authorization?: string
  appKey?: string
}

export interface RequestConfig<T = any> extends AxiosRequestConfig {
  url: string
  method?: HttpMethodEnum
  data?: T
  params?: T
  headers?: RequestHeaders
  withToken?: boolean
  isTransformResponse?: boolean
  responseType?: ResponseTypeEnum
  ignoreCancelToken?: boolean
}

export interface Result<T = any> {
  data: T
  code: number
  message?: string
}
