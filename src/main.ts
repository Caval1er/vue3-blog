import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from './store'
import App from './App.vue'
import VueDomPurifyHTML from 'vue-dompurify-html'
import 'ant-design-vue/dist/antd.css'
import '@/assets/styles/index.css'
const app = createApp(App)
// 注册vue-router
setupRouter(app)
setupStore(app)
app.use(VueDomPurifyHTML)
app.mount('#app')
