<template>
  <div class="search-box">
    <!-- 位置信息获取 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围选择 -->
    <div class="section" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{startDateStr}}</span>
        </div>
      </div>
      <div class="stay">
        <span>预计住宿{{stayCount}}晚</span>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离开</span>
          <span class="time">{{endDateStr}}</span>
        </div>
      </div>
    </div>

    <!-- 日历住宿时间选择 -->
    <van-calendar 
      v-model:show="showCalendar" 
      type="range"
      color="#ff9854" 
      @confirm="onConfirm" />

    <!-- 预约提示信息 -->
    <div class="section-tips">
      <div class="tips-item">
        <span class="tips">接受预定</span>
      </div>
      <div class="tips-itme"></div>
      <div class="tips-item">
        <span class="tips">人数不限</span>
      </div>
    </div>

    <!-- 关键字提示信息 -->
    <div class="section-tips">
      <span class="tips">关键字/位置/民宿名</span>
      <span class="tips"></span>
      <span class="tips"></span>
    </div>

    <!-- 城市气泡选择 -->
    <div class="hotSuggest">
      <template v-for="(item, index) in hotSuggests" :key="index" >
        <div class="item" 
        :style="{ color: item.tagText.color, background: item.tagText.background.color}"
        >{{item.tagText.text}}</div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-box" >
      <div class="text" @click="searchClick">
        <span>开始搜索</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { computed } from '@vue/reactivity';

import { formartMonthDay, getCountDays } from '@/utils/format_date'
import useHomeStore from "@/stores/modules/home"
import usecityStore from '@/stores/modules/city';
import useMainStore from '@/stores/modules/main';


// 定义Props数据
// defineProps({
//   suggestsData: {
//     type: Array,
//     default: () => []
//   }
// })

const router = useRouter()

//通过pinia获取共享到store中的回显数据(城市地址)
const cityStore = usecityStore()
const { currentCity } = storeToRefs(cityStore)

// 城市/位置信息
const cityClick = () => {
  router.push("/city")
}

// 获取位置信息 
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res);
  }, err => {
    console.log(err);
  })
}

// 当前时间获取范围
const mainStore = useMainStore()
const { startDate , endDate } = storeToRefs(mainStore)

const startDateStr = computed(() => formartMonthDay(startDate.value))
const endDateStr = computed(() => formartMonthDay(endDate.value))
const stayCount = computed(() => getCountDays(startDate.value, endDate.value))

// 日历时间获取
const showCalendar = ref(false)

//设置日期, 计算日期时间差多少晚
const onConfirm = (value) => {
  const setStartDate = value[0]
  const setEndDate = value[1]

  mainStore.startDate = setStartDate
  mainStore.endDate = setEndDate
  stayCount.value = getCountDays(setStartDate, setEndDate)
  
  showCalendar.value = false
}

//热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

//搜索按钮点击
const searchClick  = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      currentCity: currentCity.value.cityName
    }
  })
}

</script>

<style lang="less" scoped>
.search-box {
  
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
      flex: 1;
    }

    .position {
      width: 74px;
      display: flex;
      align-items: center;

      .text {
        font-size: 14px;
        position: relative;
        top: 2px
      }

      img {
        margin-left: 1px;
        width: 17px;
        height: 17px;

      }
    }
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-between;
    padding: 0 20px;
    height: 44px;

    .start{
      flex: 1;
      height: 44px;
      display: flex;
      align-items: center;
    }

    .stay {
      flex: 1;
      text-align: center;
      margin-top: 10px;
    }

    .end {
      flex: 1;
      height: 44px;
      display: flex;
      align-items: center;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-style: 12px;
        text-align: center;
        color: #999;
      }

      .time {
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        margin-top: 3px;
      }
    }
  }

  .section-tips {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 34px;

    .tips{
      display: flex;
      color: #999;
      font-size: 14px;
      font-weight: 700;
      padding-right: 3px;
    }
    .tips-title {
      display: flex;
      align-items: flex-start;
    }


    
  }

  .hotSuggest {
    display: flex;
    margin: 0 20px;
    padding: 10px 0;
    flex-direction: row;
    flex-wrap: wrap;
    

      .item {
      padding: 3px 5px;
      border-radius: 8px;
      margin: 4px;
      line-height: 1;

    }   
  }

  .search-box {
    display: flex;
    width: 70%;
    height: 40px;
    padding: 0 10px;
    margin: auto;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background-color: #ff9854;
    
    .text {
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
}
</style>