// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons"
import { FaCheckCircle } from "oh-vue-icons/icons"
import { IoLibraryOutline } from "oh-vue-icons/icons"
import { MdTimerOutlined } from "oh-vue-icons/icons"
import { OiInfinity } from "oh-vue-icons/icons"
import { RiUserFollowLine } from "oh-vue-icons/icons"
import { LaPiggyBankSolid } from "oh-vue-icons/icons"
import { MdLibrarybooksOutlined } from "oh-vue-icons/icons"
import { MdClose } from "oh-vue-icons/icons";

// add imported icons here
addIcons(FaCheckCircle)
addIcons(IoLibraryOutline)
addIcons(MdTimerOutlined)
addIcons(OiInfinity)
addIcons(RiUserFollowLine)
addIcons(LaPiggyBankSolid)
addIcons(MdLibrarybooksOutlined)
addIcons(MdClose)


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);

app.mount('#app')

