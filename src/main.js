import { createApp } from 'vue'

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
// global css
import './styles/index.scss'
import Vue3Marquee from 'vue3-marquee'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(ElementPlus)
app.use(router)
app.use(Vue3Marquee)
app.use(store)
app.use(createPinia());
app.mount('#app')