import { createRouter, createWebHistory } from 'vue-router'
import { basicRoute } from './route'
import type { App } from 'vue'
const router = createRouter({
  history: createWebHistory(),
  routes: basicRoute,
  scrollBehavior: async (to, from, savedPosition) => {
    // debugger
    if (to.name === 'ArticleDetail' && !to.hash) {
      return new Promise((resolve) => {
        const timeout = setInterval(() => {
          if (document.querySelector('#article-container')) {
            clearInterval(timeout)
            resolve({
              el: '#article-container',
              behavior: 'smooth',
            })
          }
        })
      })
    } else if (to.hash && to.path !== from.path) {
      return new Promise((resolve) => {
        const timeout = setInterval(() => {
          if (document.querySelector(to.hash)) {
            clearInterval(timeout)
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          }
        })
      })
    } else if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
  strict: true,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
