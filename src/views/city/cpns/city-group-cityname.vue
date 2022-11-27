<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门城市" />
        <div class="hotcity">
          <template v-for="(item, index) in groupData.hotCities">
            <div class="list" @click="cityClick(item)">{{item.cityName}}</div>
          </template>
        </div>

      <template v-for="(item, index) in groupData.cities" :key="index">
        <van-index-anchor :index="item.group" />
        <template v-for="(city, indey) in item.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>


    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <div class="group-item">
        <h2 class="title">所属组：{{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in group.cities" :key="indey">
            <div class="city">{{ city.cityName }}</div>
          </template>
        </div>
      </div>
    </template> -->
  </div>
</template>

<script setup>
import usecityStore from '@/stores/modules/city';
import { computed } from 'vue'
import { useRouter } from 'vue-router';

// 获取城市数据
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 动态获取列表排列
const indexList = computed(() => {
  const list  = props.groupData.cities.map( item => item.group);
  list.unshift("#")
  return list
})

// 获取城市点击
const router = useRouter()
const cityStore = usecityStore()
const cityClick = (city) => {
  cityStore.currentCity = city
  //返回上一级显示界面
  router.back()
}


</script>

<style lang="less" scoped>
.city-group {

  .hotcity {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;

    .list {
      height: 28px;
      width: 70px;
      margin: 3px;
      text-align: center;
      font-size: 14px;
      border-radius: 14px;
      line-height: 30px;
      background-color: antiquewhite;

    }
  }
}
</style>