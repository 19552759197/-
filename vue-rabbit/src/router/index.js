// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'
import Checkout from '@/views/Checkout/index.vue'
import Pay from '@/views/Pay/index.vue'
import PayBack from '@/views/Pay/PayBack.vue'
import Member from '@/views/Member/index.vue'
import UserInfo from '@/views/Member/components/UserInfo.vue'
import UserOrder from '@/views/Member/components/UserOrder.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {//笔记，下面的:id是动态路由传参，和LayoutHeaderUI.vue里的:to= 联系起来
          path: 'category/:id',
          component: Category
        },
        {//这里是点击普通导航栏后的界面中的全部分类区域，和普通导航栏后的界面是平级关系
          path: 'category/sub/:id',
          component: SubCategory
        },
        {
          path: 'detail/:id',
          component: Detail
        },
        {
          path: 'cartlist',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },
        {
          path: 'member',
          component: Member,
          children: [
            {
              path: '',
              component: UserInfo
            },
            {
              path: 'order',
              component: UserOrder
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
  // 笔记路由滚动行为定制，切换路由滚动条回到顶部
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
