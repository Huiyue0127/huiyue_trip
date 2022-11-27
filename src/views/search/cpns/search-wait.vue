<template>
  <div class="item-landlord">
    <img class="land-img" src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
    <div class="land-title">
      <span class="title">功能日益完善中，请耐心等待</span>
    </div>
    <div class="land-btn" @click="landBtnClick">随便去逛逛</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const landBtnClick = () => {
  router.back()
}
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
    
    .title{
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