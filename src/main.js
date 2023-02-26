import { createApp } from 'vue'
import router from "./router/index" 
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'




createApp(App).use(router).mount('#app')
const app=createApp(App)
app.use(ElementPlus)

