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
    <div class="search-box" :class="{'focus': isSearchFocus}">
      <input
        class="input-box"
        v-model="searchTxt"
        placeholder="在维基中搜索"
        @focus="isSearchFocus = true"
        @blur="isSearchFocus = false"
      />
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
        isSearchFocus: false,
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
      margin-left: 10px;
      border: 1px solid #444;
      box-shadow: -1px 1px 0 0 #222;
      padding: 8px 5px;
      background-color: #fefefe;
      background-image: url("~assets/img/ui/search.svg");
      background-size: 16px;
      background-position: 7px center;
      background-repeat: no-repeat;
      transition: box-shadow 0.15s ease, border-color 0.15s ease;

      .input-box {
        padding: 8px 5px 8px 25px;
        border: 0;
        height: 20px;
        line-height: 20px;
        outline: none;
        font-size: 14px;
        background-color: transparent;
        font-weight: 500;
        min-width: 200px;
      }

      i,
      .input-box {
        color: #444;
        transition: color 0.15s ease;
      }

      &:hover,
      &.focus {
        border-color: #000;
        transition: border-color 0.15s ease;
        .input-box,
        i {
          color: #000;
          transition: color 0.15s ease;
        }
      }

      &.focus {
        box-shadow: -3px 3px 0 0 #000;
        transition: box-shadow 0.15s ease, border-color 0.15s ease;
      }
    }
  }
</style>
