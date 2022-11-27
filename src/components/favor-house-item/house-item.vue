<template>
  <div class="house-item">
    <div class="swiper-wrapper">
      <img class="banner" :src="houseItemData.defaultPicture" alt="">
      <div class="score">
        <item-score :item-data="houseItemData.commentBriefForCD"></item-score>
      </div>
      <div class="tools">
        <item-tools :item-data="getToolsData"></item-tools>
      </div>
    </div>
    <div class="infos">
      <item-infos :item-data="getInfosData"></item-infos>
      <item-price :item-data="getPriceData"></item-price>
    </div>

  </div>
</template>

<script setup>
import { computed, watch, ref } from "vue"
import ItemScore from "./cpns/item-score.vue"
import ItemTools from "./cpns/item-tools.vue"
import ItemInfos from "./cpns/item-infos.vue"
import ItemPrice from "./cpns/item-price.vue"

const props = defineProps({
  itemData: {
    type: Object,
    default: () => { }
  }
})

const houseItemData = ref({})
watch(
  () => props.itemData,
  (newValue, oldValue) => {
    houseItemData.value = newValue;
  },
  {
    immediate: true,
  }
);


const getToolsData = computed(() => {
  let data = houseItemData.value

  let favoritemCount = 0;
  let totalCount = 0;

  if (data.preloadHouse) {
    favoritemCount = data.preloadHouse.favoriteCount;
    totalCount = data.preloadHouse.totalCount;
  } else {
    totalCount = data.commentBriefForCD.totalCount
  }
  return {
    logoUrl: data.logoUrl,
    favoritemCount,
    totalCount,
  };
});

// let address = ""
// let unitSummeries = ""
// let unitName = ""
// let houseTags = ""
// let productPrice = ""
// let finalPrice = ""
// let priceTipBadge = ""

const getInfosData = computed(() => {
  let data = houseItemData.value
  return {
    address: data.address,
    unit1: data.unitSummeries[0]?.text,
    unit2: data.unitSummeries[1]?.text,
    unit3: data.unitSummeries[2]?.text,
    unitName: data.unitName
  }
})

const getPriceData = computed(() => {
  let data = houseItemData.value
  return{
    houseTags1: data.houseTags[0]?.text,
    houseTags2: data.houseTags[1]?.text,
    productPrice: data.productPrice,
    finalPrice: data.finalPrice,
    priceTipBadge: data.priceTipBadge?.text
  }
})

</script>

<style lang="less" scoped>
.house-item {
  padding: 10px 20px;

  .swiper-wrapper {
    position: relative;

    img {
      width: 100%;
    }

    .banner {
      width: 100%;
      border-radius: 6px;
      margin-bottom: 7px;
    }

    .score {
      position: absolute;
      bottom: 15px;
      left: 10px;
      right: 10px;
    }

    .tools {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

}
</style>