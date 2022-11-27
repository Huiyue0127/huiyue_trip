<template>
  <div class="home-content">
    <div class="t3-inner">
      <div class="cover">
        <img :src="props.itemData.image.url" alt="">
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <div class="title">
            <span>{{props.itemData.location}}</span>
          </div>
        </div>
        <div class="title">
          <div class="p1">{{props.itemData.houseName}}</div>
          <div class="p2">{{props.itemData.summaryText}}</div>
        </div>
        <div class="price">
          <div class="new">¥{{props.itemData.finalPrice}}</div>
          <div class="old">¥{{props.itemData.productPrice}}</div>
          <div class="discount" v-if="props.itemData.priceTipBadge">{{props.itemData.priceTipBadge.text}}</div>
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

  .t3-inner {
    display: flex;
    flex-wrap: wrap;
    margin: 5px;
    justify-content: space-between;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
        border-radius: 6px;
      }
    }

    .info {
      padding: 10px 6px;
      color: #666;
      .location {
        display: flex;
        align-items: center;
        img {
          width: 15px;
          height: 15px;
          margin-top: -3px;
        }
        .title {
          font-size: 14px;

          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

      }

      .price {
        display: flex;
        flex-direction: row;
        
        .new {
          color: #ff9854;
          font-size: 16px;
          font-weight: 600;
        }
        .old {
          margin: 0 3px;
          font-size: 12px;
          text-decoration-line: line-through;
        }

        .discount {
          background-image: linear-gradient(270deg,#f66,#ff9f9f);
          color: #fff;
          padding: 2px 6px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>