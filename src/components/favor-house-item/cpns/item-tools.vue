<template>
  <div class="favor-tools">
    <img :src="itemData.logoUrl" alt="">
    <div class="favor-like">
      <img class="like-icon" src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png" alt="">
      <span v-if="itemData.favoritemCount">{{itemData.favoritemCount}}</span>
    </div>
    <div class="favor-total">
      <img class="total-icon" src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" alt="">
      <span v-if="itemData.totalCount">{{itemData.totalCount}}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  itemData: {
    type: Object,
    default: () => ({})

  }
})
</script>

<style lang="less" scoped>
.favor-tools {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;

  img {
    width: 45px;
    border-radius: 50%;
  }

  .favor-like {
    .like-icon {
      padding: 15px 0;
      width: 40px;
    }
  }

  .favor-total {
    display: flex;
    flex-direction: column;
    align-items:center ;
    
    color: #fff;
    font-size: 16px;
    font-weight: 550;

    .total-icon {
      width: 40px;
    }
  }
}
</style>