import type { RouteRecordRaw } from 'vue-router'
import { LAYOUT } from '@/router/constant'

const ArticleRoute: RouteRecordRaw = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  children: [
    {
      path: 'detail/:id(\\d+)',
      name: 'ArticleDetail',
      props: true,
      component: () => import('@/views/Articles/ArticleDetail.vue'),
    },
    {
      path: 'list',
      name: 'ArticleList',
      component: () => import('@/views/Articles/ArticleList.vue'),
    },
  ],
}

export default ArticleRoute
