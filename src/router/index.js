import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

const FormA = () => import('../views/FormA.vue');
const FloorPlan = () => import('../views/FloorPlan.vue');
const FormB = () => import('../views/FormB.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/formA',
    component: FormA,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/floorPlan',
    component: FloorPlan,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/formB',
    component: FormB,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '*',
    redirect: '/login',
    meta: {
      keepAlive: false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
