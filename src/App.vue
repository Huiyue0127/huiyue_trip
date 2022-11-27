<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading/>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  // import tabBar from '@/components/tab-bar/tab-bar.vue';
  import tabBar from '@/components/tab-bar/vant-tabbar.vue';
  import loading from "@/components/loading/loading.vue"

  const route = useRoute()
</script>

<style lang="less" scoped>

</style>