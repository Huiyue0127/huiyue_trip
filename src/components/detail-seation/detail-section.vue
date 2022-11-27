<template>
  <div class="detail-section">
    <div class="header">
      <h2 class="title">{{title}}</h2>
    </div>
    <div class="content">
      <slot>
        <h3>xxxxxxxxxxxxxx</h3>
      </slot>
    </div>
    <div class="footer" v-if="moreText.length">
      <span class="more">{{moreText}}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  moreText: {
    type: String,
    default: ""
  }
})

</script>

<style lang="less" scoped>
.detail-section {
  padding: 0 15px;
  margin-top: 8px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .header {
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #f5f6f9;

    .title {
      font-size: 20px;
      color: #333;
    }
  }


  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 44px;
    height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
    
  }
}
</style>