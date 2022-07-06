import type { RouteRecordRaw } from 'vue-router'
import { LAYOUT } from '@/router/constant'

const ArticleRoute: RouteRecordRaw = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  children: [
    {
      path: 'detail/:id',
      name: 'ArticleDetail',
      component: () => import('@/views/Articles/ArticleDetail.vue'),
    },
  ],
}

export default ArticleRoute
