import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import interact from 'interactjs'

const app = createApp(App)
app.use(interact)

app.mount('#app')
