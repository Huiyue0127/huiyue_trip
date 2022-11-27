<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>

      <template #indicator="{ active, total }">
        <!-- <div class="indicator">{{active+1}}/{{total}}</div> -->

        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroupDate" :key="key">
            <span class="item">{{resetName(value[0].title)}}</span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>

const props = defineProps({
  swipeData: {
    type: Array,
    default: () => []
  }
})

// 对拿到的数据进行处理
const swipeGroupDate = {}
//思路1 将获取到的类型属性 2 4 9传递到数组当中组成数组形式
// for (const item of props.swipeData){
//   swipeGroupDate[item.enumPictureCategory] = [];
// }
// for (const item of props.swipeData){
//   const arrayValue = swipeGroupDate[item.enumPictureCategory]
//   arrayValue.push(item)
// }

//思路2. 使用一个for循环
for (const item of props.swipeData){
  let value = swipeGroupDate[item.enumPictureCategory]
  if(!value){
    value = []
    swipeGroupDate[item.enumPictureCategory] = value
  }
  value.push(item)
}

// 处理数据格式  replace和正则匹配两种方法
const nameReg = /【(.*?)】/i
const resetName = (name) => {
  // return name.replace("：","").replace("【","").replace("】","")
  const results = nameReg.exec(name)
  return results[1]
}
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);

      .item {
        margin: 0 3px;
      }
    }
  }
}
</style>