import request from '@/utils/http/axios'

import { MarkdownParams, GetHtmlWithHeaderResult } from './model/markdownModel'
import { ErrorMessageMode } from '#/axios'
enum Api {
  getHtmlWithHeader = '/markdown/htmlWithHeader',
}
export const getHtmlWithHeader = (
  params: MarkdownParams,
  mode: ErrorMessageMode = 'modal'
) => {
  return request.post<GetHtmlWithHeaderResult>(
    {
      url: Api.getHtmlWithHeader,
      params,
    },
    {
      errorMessageMode: mode,
    }
  )
}
