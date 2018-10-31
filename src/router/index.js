import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/goods/Goods'
// import ratings from 'components/ratings/ratings';
// import Seller from 'components/Seller/Seller';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Goods',
      name: 'Goods',
      component: Goods
    }
  ],
  linkActiveClass: 'active'
})
