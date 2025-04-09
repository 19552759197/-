import request from '@/utils/http'
// 笔记，这里关于商品分类
// 笔记，吸顶导航和普通导航都会发相同的请求，资源浪费，
export function getCategoryAPI (id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据
 * @param {*} id 分类id 
 * @return {*}
 */
// 笔记，下面是面包屑功能
export const getCategoryFilterAPI = (id) => {
  return request({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return request({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}