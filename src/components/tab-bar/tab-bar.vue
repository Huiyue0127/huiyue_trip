<template>
  <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
    <template v-for="(item, index) in tabbarData">
      <van-tabbar-item :to="item.path">
        <span>{{item.text}}</span>
        <template #icon>
          <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
          <img v-else :src="getAssetUrl(item.imageActive)" alt="">
        </template>
      </van-tabbar-item>
    </template>
  
  </van-tabbar>
</template>


<script setup>
import { ref, watch } from "vue"
import tabbarData from "@/assets/data/tabbar.js"
import getAssetUrl from "@/utils/get_assets.js"
import { useRoute } from "vue-router";

const currentIndex = ref(0)
const route = useRoute()

watch(route,(newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})

</script>

<style lang="less" scoped>

.van-tabbar{
  img {
    height: 28px;
  }
}

</style>