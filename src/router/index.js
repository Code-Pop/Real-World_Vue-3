import { createRouter, createWebHistory } from 'vue-router'
import EventsList from '../views/EventsList.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () =>
    //  import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
