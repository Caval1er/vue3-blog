import type { ProxyOptions } from 'vite'
type ProxyItem = [string, string]

type ProxyList = ProxyItem[]

type proxyTargetList = Record<string, string | ProxyOptions>
const httpsRE = /^https:\/\//
export function createProxy(list: ProxyList = []) {
  const ret: proxyTargetList = {}

  for (const [prefix, target] of list) {
    const isHttps = httpsRE.test(target)
    ret[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => {
        return path.replace(new RegExp(`^${prefix}`), '')
      },
      ...(isHttps ? { secure: false } : {}),
    }
  }
  return ret
}
