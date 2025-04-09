// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'
export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result

//     上面代码发起了一个登录请求，使用 loginAPI 函数传入用户的账号和密码。
// 登录成功后，将服务器返回的用户信息存储在 userInfo 变量中。

// cartList 是本地购物车的商品列表。
// map 方法遍历本地购物车列表，将每个商品项转换为一个包含 skuId、selected 和 count 的对象。
// mergeCartAPI 是一个用于合并购物车的 API 函数，它接收一个包含商品信息的数组作为参数，将本地购物车中的商品信息发送到服务器进行合并操作。
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count
      }
    }))
    cartStore.updateNewList()
  }

  // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 执行清除购物车的action
    cartStore.clearCart()
  }
  // 3. 以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, {
  persist: true,
})