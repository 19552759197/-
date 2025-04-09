// 封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory () {
  // 获取分类数据
  const categoryData = ref({})
  const route = useRoute()
  // 笔记，下面params是因为apis里category.js中面包屑的就是params
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

    // 如果下面getCategory的传了最新的路由参数to.params.id，那么上面async里面就是最新的路由参数，，如果没传，那就是空的，完成点击普通导航栏后的界面的图都在变化

  // 点击普通导航栏后的界面的轮播图不会变，接口不用重新发送
  // 目标:路由参数变化的时候 可以把分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    // 笔记to代表着变化后的路由对象
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
  }