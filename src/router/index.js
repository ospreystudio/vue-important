import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home";
import Arrays from "../components/Arrays";
import Function from "../components/Functions"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/array',
    name: '',
    component: Arrays
  },
  {
    path: '/func',
    name: '',
    component: Function
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
