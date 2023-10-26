import { createApp } from 'vue'
// global css
import './styles/index.scss'
import App from './App.vue'
import { createPinia } from "pinia"
import ElementPlus from 'element-plus';
import router from './router'
import store from './store'
// import "@/assets/global.scss";
import 'element-plus/dist/index.css';
// import "@/untils/vee-validate.js";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './permission' // permission control
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.use(router)
app.use(store)
app.use(createPinia());
app.mount('#app')