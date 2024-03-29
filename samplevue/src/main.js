import '@/assets/css/common.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverURL = '//localhost:3333'
app.use(router).mount('#app')
