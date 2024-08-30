import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/sass/style.scss'
import Vue3Marquee from 'vue3-marquee'
createApp(App).use(Vue3Marquee).use(store).use(router).mount('#app')
