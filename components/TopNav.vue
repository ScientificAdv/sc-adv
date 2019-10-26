<template>
  <nav id="topNav" class="top-nav">
    <ul class="nav-list">
      <li>作品中心</li>
      <li>角色汇总</li>
      <nuxt-link v-for="item in navItems" :key="item.text" :to="item.to" tag="li">
        {{ item.text }}
        <i class="iconfont icondown" v-if="item.is_dropdown"></i>
      </nuxt-link>
    </ul>
    <div class="search-box">
      <input class="input-box" v-model="searchTxt" placeholder="在维基中搜索" />
    </div>
  </nav>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        searchTxt: '',
        navItems: [
          {
            text: '游戏',
            to: '/steins-gate',
            is_dropdown: true
          },
          {
            text: '动画',
            to: '/steins-gate',
            is_dropdown: true
          },
          {
            text: '漫画',
            to: '/steins-gate',
            is_dropdown: true
          },
          {
            text: '广播剧',
            to: '/steins-gate',
            is_dropdown: true
          },
          {
            text: '官方小说',
            to: '/steins-gate',
            is_dropdown: true
          },
          {
            text: '音乐',
            to: '/steins-gate',
            is_dropdown: true
          },
        ]
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
      align-items: baseline;
      flex-wrap: wrap;
      background-color: #fff;
      border-bottom: 0;

      li {
        height: 60px;
        line-height: 60px;
        margin: 0;
        font-size: 14px;
        color: #303133;
        padding: 0 10px;
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
      background-color: #fefefe;
      background-image: url("~assets/img/ui/search.svg");
      background-size: 16px;
      background-position: 7px center;
      background-repeat: no-repeat;
    }

    .input-box {
      padding: 8px 5px 8px 25px;
      border: 0;
      height: 20px;
      line-height: 20px;
      outline: none;
      font-size: 14px;
      color: #000;
      background-color: transparent;
      font-weight: 500;
      min-width: 200px;
    }
  }
</style>
