import { ERROR_LOG_ROUTE } from './basic'
import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []
Object.keys(modules).forEach((key) => {
  const module = modules[key].default || {}
  const modList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...modList)
})
const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/article',
}

export const basicRoute: RouteRecordRaw[] = [
  rootRoute,
  ERROR_LOG_ROUTE,
  ...routeModuleList,
]
