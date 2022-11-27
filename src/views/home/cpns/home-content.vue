<template>
  <div class="content">
      <h2 class="title">热门精选</h2>
      <div class="list">
        <template v-for="(item, index) in houselist" :key="item.data.houseId">
          <home-content-t3 v-if="item.discoveryContentType === 3" :item-data="item.data" @click="houseCardClick(item.data)"/>
          <home-content-t9 v-else-if="item.discoveryContentType === 9" :item-data="item.data" @click="houseCardClick(item.data)"/>
        </template>
      </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useHomeStore from '@/stores/modules/home';
import HomeContentT3 from '@/components/home-content/home-content-t3/home-content-t3.vue';
import HomeContentT9 from '@/components/home-content/home-content-t9/home-content-t9.vue';


const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore)

// 获取到点击卡片的houseId
const router = useRouter()
const houseCardClick = (item) => {
  router.push("/detail/" + item.houseId)
}

</script>

<style lang="less" scoped>
.content {
  // padding: 10px 0;

  .title {
    font-size: 22px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>