<template>
  <div class="item-score">
    <div class="score">
      <span class="num">{{itemData.overall}}分</span>
      <span class="tip">{{itemData.commentBrief}}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: String,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.item-score {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background-color: hsla(0, 0%, 100%, 0.9);
  
  border-radius: 6px;
  padding: 0 3px;
  .score {
    padding: 2px 0;
    .num {
      font-size: 14px;
      font-weight: 700;
      margin-right: 3px;
    }
    .tip {
      font-size: 12px;
    }
  }
}
</style>