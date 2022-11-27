<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template v-for="(item, index) in facilityData.houseFacilitys" :key="index">
          <div class="item" v-if="facilityData.facilitySort?.includes(index)">
            <div class="item-left">
              <img :src="item.icon" alt="">
              <span class="name">{{item.groupName}}</span>
            </div>
            <div class="item-right">
              <template v-for="(item, indey) in item.facilitys.slice(0,4)" :key="indey">
                <div class="list">
                  <img src="@/assets/img/detail/icon_check.png" alt="">
                  <span class="name">{{item.name}}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>

  </div>
</template>

<script setup>
import detailSection from "@/components/detail-seation/detail-section.vue"

defineProps({
  facilityData: {
    type: Object,
  default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.facility {
  .facility-inner {
    padding: 5px 0;
    font-size: 12px;
    border-radius: 5px;
    background-color: #f7f9fb;

    .item {
      display: flex;
      margin: 25px 0;
      .item-left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;

        img {
          width: 20px;
          height: 20px;
        }

        .name {
          color: #000;
          margin-top: 4px;
        }
      }

      .item-right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .list {
          display: flex;
          align-items: center;
          width: 50%;
          box-sizing: border-box;
          margin: 2px 0;

          img {
          width: 15px;
          height: 15px;
        }
        }
      }
    }
  }
}

</style>