<template>
  <div class="item-info">
    <div class="tag">
      <span class="address">{{itemData.address}}</span>
      <span class="tags">{{itemData.unit1}}·{{itemData.unit2}}</span>
    </div>
    <div class="title">
      <span class="houseName">
        {{itemData.unitName}}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="less" scoped>
.item-info {
  .tag {
    display: flex;
    align-items: center;

    .address {
      padding: 2px 2px;
      max-width: 200px;
      text-align: center;
      border-radius: 4px;
      
      color: #fff;
      background: #3f4954;

      display: -webkit-box; 
      -webkit-line-clamp: 1; 
      -webkit-box-orient: vertical;;
    }
    .tags {
      margin-top: 4px;
      margin-left: 10px;
      font-size: 13px;
      color: #666;
    }
  }

  .title {
    .houseName {
      line-height: 22px;
      font-size: 18px;
      text-overflow: ellipsis;
      display: -webkit-box; 
      -webkit-line-clamp: 3; 
      -webkit-box-orient: vertical;;
      
    }
  }
}
</style>