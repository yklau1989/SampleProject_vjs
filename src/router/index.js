import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Checkout from '@/components/Checkout'
import Connection from '@/components/Connection'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/shoppingcart',
      name: 'shoppingcart',
      component: ShoppingCart
    },
    {
      path: '/connection',
      name: 'connection',
      component: Connection
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})
