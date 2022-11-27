<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div>{{item.title}}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  overflow-x: auto;
  &::-webkit-scrollbar{
    display: none
  }

  .item {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;
    

    img {
      width: 40px;
      height: auto;
    }
  }
}
</style>