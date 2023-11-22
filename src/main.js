import { createApp } from 'vue'

import App from './App.vue'
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Contact from "./views/Contact.vue"
import Tests from "./views/Tests.vue"
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path : "/home",
        name : "Home",
        component : Home
    },
    {
        path : "/about",
        component : About
    },
    {
        path : "/contact",
        component : Contact
    },
    {
        path : "/tests",
        component : Tests
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
createApp(App)
.use(router)
.mount('#app')
