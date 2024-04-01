<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import WhatIsIB from './components/WhatIsIB.vue'
import AllInOne from './components/AllInOne.vue'
import Benefits from './components/Benefits.vue'
import BeTheFirst from './components/BeTheFirst.vue'
import Footer from './components/Footer.vue'
import NeedHelp from './components/NeedHelp.vue'

import '../src/assets/base.css'


</script>

<template>
  <Navbar />
  <WhatIsIB />
  <AllInOne />
  <Benefits />
  <BeTheFirst />
  <Footer></Footer>
  <NeedHelp v-if="showComponent" />

  
</template>

<style scoped>

</style>
