import { createRouter, createWebHistory } from 'vue-router'
import { basicRoute } from './route'
import { App } from 'vue'
const router = createRouter({
  history: createWebHistory(),
  routes: basicRoute,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.name === 'ArticleDetail' && !to.hash) {
      return new Promise((resolve) => {
        const timeout = setInterval(() => {
          if (
            document.querySelector('#article-container .markdown-body')
              ?.innerHTML
          ) {
            clearInterval(timeout)
            resolve({
              el: '#article-container',
              top: 100,
              behavior: 'smooth',
            })
          }
        }, 100)
      })
    } else if (to.hash) {
      return new Promise((resolve, reject) => {
        let limit = 0
        const timeout = setInterval(() => {
          limit++
          if (document.querySelector(to.hash)) {
            clearInterval(timeout)
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })
          }
          if (limit > 10) {
            clearInterval(timeout)
            // resolve(false)
            reject(Error(`can't find anchor`))
          }
        }, 100)
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
