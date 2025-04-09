import request from '@/utils/http'
// 笔记，这里关于商品详情

export const getDetail = (id) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}