import Vue from 'vue'
import Router from 'vue-router'
import ImageGetter from '@/components/ImageGetter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ImageGetter',
      component: ImageGetter}
  ]
})
