//标识为首页下方导航栏组件
<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div class="tab-bar-item"
        :class="{ active: currentIndex == index }"
        @click="itemClick(index,item)">
        <img v-if="currentIndex !== index" :src="getAssetUrl(item.image)" alt="">
        <img v-else :src="getAssetUrl(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbar.js"
import getAssetUrl from "@/utils/get_assets.js"
import { useRouter } from "vue-router";
import { ref } from "vue"

const currentIndex = ref(0)
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  router.push(item.path)
}
  
</script>

<style lang="less" scoped>

.tab-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;

border-top: 1px solid #f3f3f3;

  .tab-bar-item{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    .text{
      font-size: 12px;
      margin-top: 2px;
    }

    img{
      width: 36px;
    }
  }
}




</style>