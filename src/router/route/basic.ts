import type { RouteRecordRaw } from 'vue-router'
import { ERROR_LOG_NAME, PAGE_NOT_FOUND_NAME } from '@/router/constant'

export const ERROR_LOG_ROUTE: RouteRecordRaw = {
  name: ERROR_LOG_NAME,
  path: '/error-log',
  component: () => import('@/components/ErrorLog.vue'),
}
