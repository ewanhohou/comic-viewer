import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ReadingPage from '@/components/ReadingPage'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/reading',
      name: 'ReadingPage',
      component: ReadingPage
    },
  ]
})
