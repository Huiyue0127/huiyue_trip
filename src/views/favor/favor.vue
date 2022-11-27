<template>
  <div class="favor-item">
    <nav-bar left-text="返回" title="我的收藏" left-arrow>
      <!-- <template #title>
        <van-tabs v-model:active="active" type="card" shrink>
          <van-tab v-for="item in titles" :title="item"></van-tab>
        </van-tabs>
      </template> -->

    </nav-bar>
      <van-tabs v-model:active="active" color="#ff9854">
        <van-tab title="房屋">
          <div class="content">
            <template v-for="(item, index) in favorlist" :key="index">
              <house-item :item-data="item"></house-item>
            </template>
          </div>
        </van-tab>
        <van-tab title="房东">
          <landlord-item></landlord-item>
        </van-tab>
      </van-tabs>


  </div>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "@/components/nav-bar/nav-bar.vue"
import HouseItem from "@/components/favor-house-item/house-item.vue"
import landlordItem from "@/components/favor-landlord-item/landlord-item.vue"
import { getFavorList, getFavorHistory } from "@/service"

const titles = ['我的收藏', '浏览记录']
const favorlist = ref({})
const favorhistory = ref({})

getFavorList().then((res) => {
  favorlist.value = res.data.data.items || []
})

getFavorHistory().then((res) => {
  favorhistory.value = res.data.data.items || []
})

</script>

<style lang="less" scoped>
.favor-item {
  .favor{
    .content {
    padding-bottom: 55px;
  }
  }
  
}
</style>