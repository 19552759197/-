// 封装banner轮播图相关的业务代码
import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner () {
  const bannerList = ref([])

  // 下面是因为apis里的home.js的轮播图和这个面包屑那里的轮播图一起用，默认为1 商品为2
  const getBanner = async () => {
    const res = await getBannerAPI({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}