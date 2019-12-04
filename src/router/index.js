import Vue from 'vue'
import Router from 'vue-router'

const HomePage = (resolve) => {
  import('@/components/home/index').then((moudle) => {
    resolve(moudle)
  })
}

const ArticlePage = (resolve) => {
  import('@/components/article/list').then((moudle) => {
    resolve(moudle)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/article/list/:id',
      name: 'articlePage',
      component: ArticlePage
    }
  ]
})
