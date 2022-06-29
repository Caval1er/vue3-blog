import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoute } from './route'
import type { App } from 'vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoute,
  scrollBehavior() {
    return {
      top: 0,
    }
  },
  strict: true,
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
