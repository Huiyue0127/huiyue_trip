<template>
  <div class="vant-tabbar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :icon="iconList[index]" :to="item.path">
          <span>{{item.text}}</span>
        </van-tabbar-item>
      </template>
      
    </van-tabbar>

  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import tabbarData from "@/assets/data/tabbar.js"
import { useRoute } from "vue-router";

const currentIndex = ref(0)
const route = useRoute()

const iconList = ['wap-home-o', 'label-o', 'todo-list-o', 'chat-o']

watch(route,(newRoute) => {
  const index = tabbarData.findIndex(item => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<style lang="less" scoped>

</style>