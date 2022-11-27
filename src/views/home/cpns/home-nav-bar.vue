<template>
  <div class="nav-bar">
    <div class="title">去哪鹅-(゜-゜)つロ</div>
  </div>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()


</script>

<style lang="less" scoped>
.nav-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 46px;
    border-bottom:  1px solid rgb(200, 198, 198);

    .title {
      color: var(--primary-color);
      font-size: 24px;
      font-weight: 700;
      position: relative;
      top: 5px;
    }
  }
.banner {
  img{
    width: 100%;
  }
}
</style>