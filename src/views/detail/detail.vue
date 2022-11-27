<template>
  <div class="detail top-page" ref="detailRef">
    <tabbar-control class="tabs"
      v-if="showTabControl"
      :titles="titles"
      @tabItemClick="tabClick"
    />
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos  name="描述" :ref="getSectionRef" :detail-infos="mainPart.topModule"/>
      <detail-facility name="设施" :ref="getSectionRef" :facility-data="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlordData="mainPart.dynamicModule.landlordModule"/>
      <detail-comment name="评论" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule"/>
      <detail-notice name="须知" :ref="getSectionRef" :order-rules="mainPart.dynamicModule.rulesModule.orderRules"/>
      <detail-map name="周边" :ref="getSectionRef" :position="mainPart.dynamicModule.positionModule"/>
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from "@/service/index"
import detailSwipe from "@/views/detail/cpns/detail_01-swipe.vue"
import detailInfos from "@/views/detail/cpns/detail_02-infos.vue"
import detailFacility from "@/views/detail/cpns/detail_03-facility.vue"
import detailLandlord from "@/views/detail/cpns/detail_04-landlord.vue"
import detailComment from "@/views/detail/cpns/detail_05-comment.vue"
import DetailNotice from "@/views/detail/cpns/detail_06-notice.vue"
import DetailMap from "@/views/detail/cpns/detail_07-map.vue"
import DetailIntro from "@/views/detail/cpns/detail_08-intro.vue"
import tabbarControl from "@/components/tabbar-control/tab-control.vue"
import useScroll from '@/hooks/useScroll';

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

//获取轮播图数据
const detailSwipeData = ref({})
const mainPart = computed(() => detailSwipeData.value.mainPart)
getDetailInfos(houseId).then(res => {
  detailSwipeData.value = res.data
})


//返回到首页
const onClickLeft = () => {
  router.back()
}

// const showTabControl = false
//tabColtrol的控制
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value >= 280
})

// const loadRef = ref()
//第一种方法传递el属性，这种方法是通过数组的形式获取的
// const sectionEl = []
// const getSectionRef = (value) =>{
//   sectionEl.push(value.$el)
// }

// 第二种方式获取是通过在组件中获取name属性并从属性中获取到
//这种方式是通过Object对象的方式获取的，将对象定义成动态的ref属性会更好

const sectionNameEl = ref({})
const titles = computed(() => {
  return Object.keys(sectionNameEl.value)
})

const getSectionRef = (value) => {
  // console.log(value.$el);
  if(!value) return
  const name = value.$el.getAttribute("name")
  sectionNameEl.value[name] = value.$el
}

const tabClick = (index) =>{
  const key = Object.keys(sectionNameEl.value)[index]
  const el = sectionNameEl.value[key]
  let sectionTop = el.offsetTop
  if(!index == 0){
    sectionTop = sectionTop -44
  }

  detailRef.value.scrollTo({
    top: sectionTop,
    behavior: "smooth"
  })
}

</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
  background-color: #fff;
}
</style>