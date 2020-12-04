import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})

