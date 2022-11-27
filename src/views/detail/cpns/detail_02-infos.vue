<template>
  <div class="infos">
    <div class="name">{{detailInfos.houseName}}</div>
    <div class="tags">
      <template v-for="(item, index) in detailInfos.houseTags" :key="index">
      <span v-if="item.tagText" class="item"
        :style="{color: item.tagText.color, background: item.tagText.background.color}">
        {{item.tagText.text}}
      </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <div class="score">{{detailInfos.commentBrief.overall}}</div>
        <div class="title">{{detailInfos.commentBrief.scoreTitle}}</div>
        <div class="brief">{{detailInfos.commentBrief.commentBrief}}</div>
      </div>
      <div class="right">
        {{detailInfos.commentBrief.totalCount}}条评论
        <van-icon name="arrow" />
      </div>
      
    </div>
    <div class="position extra">
      <div class="left">{{detailInfos.nearByPosition.address}}</div>
      <div class="right">
        <span>地图·周边</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  detailInfos: {
    type: Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>
.infos {
  padding: 15px;
  background-color: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 4px;
  }

  .tags {
    margin: 6px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }

  .comment {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }

    .brief {
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}

</style>