export interface MarkdownParams {
  id: number
}

export interface Header {
  text: string
  link: string
  children: Header[]
}
export interface GetHtmlWithHeaderResult {
  html: string
  headers: Header[]
}
