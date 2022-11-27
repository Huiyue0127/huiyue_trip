<template>
  <div class="item-landlord">
    <img class="land-img" src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
    <div class="land-title">
      <span class="title">暂无收藏</span>
      <span class="tip">点击<i><img src="@/assets/img/favor/favor.png" alt=""></i>即可收藏对应房东</span>
    </div>
    <div class="land-btn" @click="landBtnClick">随便去逛逛</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.item-landlord {
  .land-img {
    width: 100%;
  }
  .land-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    img {
      width: 15px;
      height: 15px;
    }
    .title {
      font-size: 20px;
    }
    .tip {
      margin-top: 5px;
      color: #666;
      font-size: 16px;
    }
  }

  .land-btn {
    color: #fff;
    font-size: 16px;

    display: flex;
    width: 40%;
    height: 35px;
    padding: 0 10px;
    margin: auto;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    background-color: #ff9854;

  }
}
</style>