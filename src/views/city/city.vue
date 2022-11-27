<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="地区/城市/位置" show-action shape="round" @cancel="onCancel" />
      <van-tabs v-model:active="tabActive" color="#ff9853" line-width="50px">
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>

    <div class="content">
      <!-- <city-group :group-data="currentGroup"></city-group> -->
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value"></city-group>
      </template>
    </div>


  </div>


</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import usecityStore from "@/stores/modules/city"
import { storeToRefs } from 'pinia';
import tabBarVue from '@/components/tab-bar/tab-bar.vue';
import cityGroup from './cpns/city-group-cityname.vue'

//搜索框数据定义保存
const searchValue = ref("")
const router = useRouter()

//搜索框取消返回按钮
const onCancel = () => {
  router.back()
}

//地区标签栏数据保存
const tabActive = ref()

// object类型
// console.log("tabActive:", typeof (tabActive))

/**
 * 当前位置发送网络请求的缺点：
 * 1.网络请求过多，页面包含大量的对于网络请求的和数据的处理逻辑
 * 2.如果页面封装了很多的子组件，子组件需要这些数据树，我们必须一步一步的将数据传递过去(props)
 * 优化：pinia
 */
// 网络请求。请求城市数据
// const allCity = ref({})   //保存网络请求数据
// getCityAll().then( res => {
//   allCity.value = res.data  //ref需要使用.value来获取
// })

//从store中获取数据
const cityStore = usecityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)

// 获取选中标签后的数据(国内/海外)
// currentgroup中的内容是对标签栏选择的板块信息的具体内容
// 默认返回的不是响应式的，使用computed包裹使他变成响应式的
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style lang="less" scoped>
.city {

  .top {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 98px);
    overflow: auto;
  }
}
</style>