<script setup>
// 笔记，这里是复用的面板，新鲜好物那排的，和HomeNew联系

// 定义props
defineProps({
  // 主标题
  title: {
    type: String
  },
  // 副标题
  subTitle: {
    type: String
  }
})

</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
<!-- 笔记，资源用占位，文字用props传值 -->
      <slot />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>