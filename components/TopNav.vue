<template>
  <div id="topNav" class="top-nav">
    <div class="menu">
      <ul class="nav-list">
        <li>作品中心</li>
        <li>人物介绍</li>
        <li>动画</li>
        <li>漫画</li>
        <li>广播剧</li>
        <li>小说</li>
        <li>音乐</li>
      </ul>
    </div>
    <div class="search-box">
      <input class="input-box" v-model="searchTxt" placeholder="在维基中搜索" />
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        searchTxt: ''
      };
    },
    methods: {
    }
  };
</script>

<style lang="scss">
  .top-nav {
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    width: calc(100% - 180px);
    background-color: #fff;
    border-bottom: 2px solid #ccc;
    z-index: 999;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 30px;

    ul.nav-list {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      background-color: #fff;
      border-bottom: 0;

      li {
        height: 60px;
        line-height: 60px;
        margin: 0;
        font-size: 14px;
        color: #303133;
        padding: 0 20px;
        cursor: pointer;
        transition: all 0.15s;
        box-sizing: border-box;
        margin-right: 30px;
      }
    }

    .search-box {
      margin-left: 100px;
      border-left: 3px solid #000;
      border-bottom: 3px solid #000;
      padding: 8px 5px;
    }

    .input-box {
      padding: 8px 5px;
      border: 0;
      height: 20px;
      line-height: 20px;
      outline: none;
      font-size: 14px;
      color: #000;
    }
  }
</style>
