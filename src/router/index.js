import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../views/Signin.vue'
import AddPicture from '../views/AddPicture.vue'
import AddSerie from '../views/AddSerie.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [

  {
  path: '/signin',
  name: 'Signin',
  component: () => import("@/views/Signin.vue")
  },
  {
    path: '/addpicture',
    name: 'AddPicture',
    component: () => import("@/views/AddPicture.vue")
    },
   {
     path: '/login',
     name: 'Login',
     component: () => import("@/views/Login.vue")
   },
   {
    path: '/addserie',
    name: 'AddSerie',
    component: () => import("@/views/AddSerie.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
