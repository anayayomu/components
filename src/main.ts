import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons'
import { toLine } from './utlis'

import cUI from './components/index'

const app = createApp(App)

for (let item in Icons) {
  app.component(`el-icon-${toLine(item)}`, (Icons as any)[item])
}

app.use(router).use(ElementPlus).use(cUI)
app.mount('#app')
