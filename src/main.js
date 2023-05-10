import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import quasarLang from 'quasar/lang/fr'
import router from './router'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
})
myApp.use(createPinia())
myApp.use(router)

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app')