import { ERROR_LOG_ROUTE } from './basic'
import type { RouteRecordRaw } from 'vue-router'

const rootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: () => import('@/components/HelloWorld.vue'),
}

export const basicRoute: RouteRecordRaw[] = [rootRoute, ERROR_LOG_ROUTE]
