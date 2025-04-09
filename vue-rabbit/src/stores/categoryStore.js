import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  // state 导航列表数据

// 笔记，滚动导航和普通导航获取的数据方法一致，怕浪费，封装到这里，去首页里调用
  const categoryList = ref([])

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
