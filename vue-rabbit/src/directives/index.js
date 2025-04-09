// 笔记，这里是懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted (el, binding) {
        
//        el：被绑定指令的 DOM 元素（即你代码中的 <img> 标签）
// binding：包含指令信息的对象，其中：
// binding.value：指令绑定的值（即你代码中的 item.picture）
// binding.arg：指令参数的字符串（如果有的话，比如 v-img-lazy:200 中的 "200"）
    const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}