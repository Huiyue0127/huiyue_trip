<template>
  <div class="nav-bar">
    <van-nav-bar @click-left="headLeftClick">
      <template #left >
        <slot name="left">
          <i class="icon-left-arrow"></i>
          <span class="left-text">{{leftText}}</span>
        </slot>
      </template>
      <template #title>
        <slot name="title">
          {{title}}
        </slot>
      </template>
      <template #right>
        <slot name="right">
          <i class="icon-right-arrow"></i>
        </slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

defineProps({
  title: {
    type: String,
    default: "标题"
  },
  leftText: {
    type: String,
    default: ""
  }
})

const router = useRouter()
const emit = defineEmits(['leftClick'])
const headLeftClick = () => {
  router.go(-1)
  emit('leftClick')
}

</script>

<style lang="less" scoped>
.icon-left-arrow {
  display: inline-block;
  background: url(@/assets/img/common/icon_nav_back.png) 0 0/ 100% 100%;;
  width: 8px;
  height: 15px;
}
.left-text {
  color: var(--primary-color);
  font-size: 16px;
  margin-left: 8px;
  margin-top: 3px;
  font-weight: 700;
}

.icon-right-arrow {
  display: inline-block;
  width: 20px;
  height: 15px;
  background-size: 20px 15px;
  background-image: url(../../assets/img/home/icon-right-menu.png);
}
</style>