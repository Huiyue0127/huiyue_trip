<template>
  <div class="background" v-if="mainStore.isLoading" @click="overlayClick">
    <div class="overlay">
      <van-loading class="loading" size="50px" vertical text-color="#fff">加载中...</van-loading>
    </div>
  </div>

</template>

<script setup>
import useMainStore from "@/stores/modules/main"
const mainStore = useMainStore()

const overlayClick = () => {
  mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
.background {
  width: 100%;
  height: 100vh;
  z-index: 9;
  background-color: #fff;
  .overlay {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 104px;
    height: 104px;
    margin-left: -52px;
    margin-top: -52px;
    z-index: 2000;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;

    .loading {
      margin-top: 10px;
      color: #fff;
    }

  }
}
</style>