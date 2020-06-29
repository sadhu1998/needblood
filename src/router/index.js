import Vue from 'vue'
import Router from 'vue-router'
import Infopage from '@/infopage/index'
import Login from '@/Login/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/infopage',
      name: 'Infopage',
      component : Infopage
    },
    {
      path : '/',
      name: 'Login',
      component : Login
    }
  ]
})
