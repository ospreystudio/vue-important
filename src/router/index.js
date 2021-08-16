import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home";
import Arrays from "../components/Arrays";
import Function from "../components/Functions"
import PropsEmmit from "../components/PropsEmmit";
import Server from "../components/Server";
import SortedPosts from "../components/SortedPosts";

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
  {
    path: '/server',
    name: '',
    component: Server
  },
  {
    path: '/sorting',
    name: '',
    component: SortedPosts
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
