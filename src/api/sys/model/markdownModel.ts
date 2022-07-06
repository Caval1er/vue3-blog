export interface MarkdownParams {
  id: number
}

export interface Header {
  title: string
  level: number
  slug: string
  children?: Header
}
export interface GetHtmlWithHeaderResult {
  html: string
  headers: Header[]
}
