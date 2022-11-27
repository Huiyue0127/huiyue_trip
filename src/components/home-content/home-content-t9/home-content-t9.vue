<template>
  <div class="home-content">
      <div class="t9-inner">
        <div class="cover">
          <img :src="props.itemData.image.url" alt=""/>
        </div>
        <div class="info">
          <div class="title">{{props.itemData.summaryText}}</div>
          <div class="name">{{props.itemData.houseName}}</div>
          <div class="star">
            <van-rate :model-value="props.itemData.commentScore" color="#fff" readonly allow-half />
          <div class="price">¥{{props.itemData.finalPrice}}</div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})


</script>

<style lang="less" scoped>
.home-content {
  width: 50%;

  .t9-inner {
    position: relative;
    margin: 5px;
    overflow: hidden;
    border-radius: 6px;

    .cover {
      img {
      width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .title {
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;;
      }

      .star {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        .price {
          color: #fff;
          font-weight: 700;
          padding-top: 4px;
          font-size: 15px;
        }
      }
    }
  }
}
</style>