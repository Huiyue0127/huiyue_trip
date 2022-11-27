<template>
  <div class="order-gopay">
    <span class="pay-tips"><i><img src="@/assets/img/order/icon-time.png" alt=""></i>27分钟后订单自动取消</span>
    <div class="pay-buttons">
      <button class="button-pay landlord">找房东</button>
      <button class="button-pay gopay">去支付</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.order-gopay {
  padding: 10px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    width: 12px;
    margin-right: 3px;
  }

  .pay-tips {
    font-size: 12px;
  }
  .pay-buttons {

    .button-pay {
      width: 75px;
      height: 34px;
      color: #666;
      font-size: 14px;
      border-radius: 5px;
      margin-right: 10px;
    }
    .landlord {
      background-color: #fff;
      border: 1px solid #999
    }
    .gopay {
      background-color: #ff9854;
      color: #fff;
      border: 1px solid rgba(0,0,0,0)
    }
  }

}
</style>