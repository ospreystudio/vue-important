import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home";
import Arrays from "../components/Arrays";
import Function from "../components/Functions"
import PropsEmmit from "../components/PropsEmmit";

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
  {
    path: '/prem',
    name: '',
    component: PropsEmmit
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
