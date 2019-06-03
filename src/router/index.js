import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import headers from '@/components/headers';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/header',
      name: 'headers',
      component: headers
    }
  ]
})
