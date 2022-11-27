<template>
  <div class="home">
    <home-nav-bar/>
    <home-search-box/>
    <home-categories/>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.02'" :end-date="'09.20'"/>
    </div>
    
    <home-content/>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "vue"

import homeNavBar from "./cpns/home-nav-bar.vue"
import homeSearchBox from "./cpns/home-search-box.vue"
import searchBar from "@/components/search-bar/search-bar.vue"
import useHomeStore from "@/stores/modules/home"
import homeCategories from "./cpns/home-categories.vue"
import homeContent from "./cpns/home-content.vue"
import useScroll from "@/hooks/useScroll"

//发生网络请求数据
const homeStore = useHomeStore()
homeStore.fatchSuggestData()
homeStore.fatchCategoriesData()
homeStore.fatchHouseListData()

// 调用hooks回调函数拉取酒店数据
const { isScrollcallBack, scrollTop } = useScroll()
watch (isScrollcallBack, (newValue) => {
  if(newValue) {
    homeStore.fatchHouseListData().then(() => {
      isScrollcallBack.value = false
    })
  }
})

// 回调搜索函数
// const isShowSearchBar = ref(false)
// watch (scrollTop, (newValue) => {
//   isShowSearchBar.value = newValue > 0
// })

const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

</script>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>