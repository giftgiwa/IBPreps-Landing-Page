// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaCheckCircle } from "oh-vue-icons/icons"

addIcons(FaCheckCircle);


const app = createApp(App)

app.use(createPinia())
app.use(router)

// add imported icons here
app.component("v-icon", OhVueIcon);


app.mount('#app')

