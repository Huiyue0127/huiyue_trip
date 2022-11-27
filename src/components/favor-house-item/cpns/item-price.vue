<template>
  <div class="item-price">
    <div class="tags">
      <span class="tag" v-if="itemData.houseTags1">{{itemData.houseTags1}}</span>
      <span class="tag" v-if="itemData.houseTags1">{{itemData.houseTags2}}</span>
    </div>
    <div class="price">
      <span class="finalPrice">¥{{itemData.finalPrice}}</span>
      <span class="productPrice">¥{{itemData.productPrice}}</span>
      <span class="priceTipBadge" v-if="itemData.priceTipBadge">{{itemData.priceTipBadge}}</span>
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
.item-price{

  .tags {
    color: #ff6666;
    .tag{
      font-size: 14px;
      margin-right: 10px;
      background-color: rgba(255,102,102,0.10);
    }
  }
  .price {
    .finalPrice {
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-color);
      margin-right: 5px;
    }
    .productPrice {
      color: #666;
      margin-right: 8px;
      text-decoration: line-through
    }
    .priceTipBadge {
      padding: 2px 2px;
      margin-right: 5px;
      display: inline-block;
      border-radius: 4px;
      color: #fff;

      background-color: #FB4A4A;
      // background-size: 13px 13px;
      // background-repeat: no-repeat;
      // background-image: url(@/assets/img/favor/icon-unit-sound.png);
    }
  }
}
</style>