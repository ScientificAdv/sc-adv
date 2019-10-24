import Vue from 'vue'
import Router from 'vue-router'

/**LayOut */
import Layout from '@/layout' 

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home/index.vue')
    },
    {
      path: '/amonymousCode',
      name: 'amonymousCode',
      component: () => import(/* webpackChunkName: "about" */ '@/views/AmonymousCode/index.vue')
    },
    {
      path: '/character',
      name: 'character',
      component: () => import(/* webpackChunkName: "about" */ '@/views/CharacterNav/index.vue')
    },
    {
      path: '/chaosChild',
      name: 'chaosChild',
      component: () => import(/* webpackChunkName: "about" */ '@/views/ChaosChild/index.vue')
    },
    {
      path: '/chaosHead',
      name: 'chaosHead',
      component: () => import(/* webpackChunkName: "about" */ '@/views/ChaosHead/index.vue')
    },
    {
      path: '/occulticNine',
      name: 'occulticNine',
      component: () => import(/* webpackChunkName: "about" */ '@/views/OcculticNine/index.vue')
    },
    {
      path: '/roboticsNotes',
      name: 'roboticsNotes',
      component: () => import(/* webpackChunkName: "about" */ '@/views/RoboticsNotes/index.vue')
    },
    {
      path: '/steinsGate',
      name: 'steinsGate',
      component: () => import(/* webpackChunkName: "about" */ '@/views/SteinsGate/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Register/index.vue')
    },
  ]
})
