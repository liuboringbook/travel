import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import List from '@/pages/list/list.vue'
import City from '@/pages/city/city.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/city',
      name:'City',
      component:City
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
