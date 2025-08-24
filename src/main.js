import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
const pinia = createPinia()

const vuetify = createVuetify()

createApp(App)
  .use(vuetify).use(pinia).mount('#app')
