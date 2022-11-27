<template>
  <div class="order-item">
    <div class="order-title">
      <span class="title">{{itemData.unitName}}</span>
      <span class="waitpay">{{itemData.orderStatusDesc}}</span>
    </div>
    <div class="order-inner">
      <img class="inner-img" :src="itemData.unitPicture" alt="">
      <div class="order-info">
        <div class="info-days">
          <span class="time days-start">{{itemData.checkInDate}}</span>
          <span class="days-time">{{itemData.checkInLatestTime}}</span>
        </div>

        <div><img src="@/assets/img/order/icon_right_orderlist.png" alt=""></div>

        <div class="info-days">
          <span class="time days-end">{{itemData.checkOutDate}}</span>
          <span class="days-time">{{itemData.checkOutLatestTime}}</span>
        </div>

        <div class="info-pay">
          <span class="pay-tips">支付总价</span>
          <span class="pay-info">¥{{itemData.prepayAmount}}</span>
        </div>
      </div>
    </div>
  </div>

  <order-gopay/>
</template>

<script setup>
import OrderGopay from "./order-gopay.vue"

defineProps({
  itemData: {
    type: String,
    default: "all"
  }
})
</script>

<style lang="less" scoped>
.order-item {
  padding: 10px 20px;

  .order-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;

    .title {
      max-width: 250px;
      overflow: hidden;
      padding-top: 2px;

      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .waitpay {
      color: #ff9854;
      font-size: 18px;
      font-weight: 600;
    }
  }
}

.order-inner {
  position: relative;

  .inner-img {
    width: 100%;
    border-radius: 10px;
  }

  .order-info {
    img {
      width: 18px;
    }

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 70px;
    border-radius: 0 0 10px 10px;
    background: rgba(9, 10, 14, 0.7);

    .time {
      color: #fff;
      font-size: 16px;
      margin: 0 10px;
    }

    .info-days {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .days-time {
        color: #999
      }
    }

    .info-pay {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      margin: 0 5px;

      .pay-tips {
        color: #fff;
        font-size: 14px;
      }

      .pay-info {
        color: #ff9854;
        font-size: 20px;
      }
    }


  }

}
</style>