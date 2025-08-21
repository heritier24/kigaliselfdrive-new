import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import global styles
import '../public/css/color-system.css'

createApp(App).use(store).use(router).mount('#app')
