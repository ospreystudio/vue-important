import { createRouter, createWebHistory } from 'vue-router'
import Home from "../pages/Home";
import Arrays from "../components/Arrays";
import Function from "../components/Functions"
import PropsEmmit from "../components/PropsEmmit";
import Server from "../components/Server";
import SortedPosts from "../components/SortedPosts";
import Search from "../components/Search";
import Pagination from "../components/UI/Pagination";
import Autopost from "../components/Autopost";
import PostIdPage from "../components/PostIdPage";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts/:id',
    name: 'PostIdPage',
    component: PostIdPage
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
  {
    path: '/search',
    name: '',
    component: Search
  },
  {
    path: '/pagination',
    name: '',
    component: Pagination
  },
  {
    path: '/autopost',
    name: '',
    component: Autopost
  },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
