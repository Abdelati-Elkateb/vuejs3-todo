import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Vuetify styles & setup
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()

createApp(App).use(vuetify).use(pinia).mount('#app')
