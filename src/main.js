import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//importing Vuex
import store from './store'

createApp(App)
	// Using our Stores, injects the store into all components for access
  .use(store)
  .use(router)
  .mount('#app')
