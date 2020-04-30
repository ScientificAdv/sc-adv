<template>
  <nav id="topNav" class="top-nav" :class="{'no-nav': isNavHiden}">
    <ul class="nav-list">
      <li v-for="item in navItems" :key="item.text">
        <nuxt-link :to="item.to" :exact="item.is_exact">
          <span>{{ item.text }}</span>
          <i class="iconfont icondown" v-if="item.is_dropdown"></i>
        </nuxt-link>
      </li>
    </ul>
    <div class="search-box" :class="{'focus': isSearchFocus}">
      <i class="iconfont iconsearch"></i>
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
            text: '作品中心',
            to: '/steins-gate',
            is_dropdown: false,
            is_exact: true
          },
          {
            text: '角色汇总',
            to: '/steins-gate/character',
            is_dropdown: false,
            is_exact: false
          },
          {
            text: '游戏',
            to: '/steins-gate/game',
            is_dropdown: true,
            is_exact: false
          },
          {
            text: '动画',
            to: '/steins-gate/anime',
            is_dropdown: true,
            is_exact: false
          },
          {
            text: '漫画',
            to: '/steins-gate/comic',
            is_dropdown: true,
            is_exact: false
          },
          {
            text: '广播剧',
            to: '/steins-gate/drama',
            is_dropdown: true,
            is_exact: false
          },
          {
            text: '官方小说',
            to: '/steins-gate/novel',
            is_dropdown: true,
            is_exact: false
          },
          {
            text: '音乐',
            to: '/steins-gate/ablum',
            is_dropdown: true,
            is_exact: false
          },
        ]
      };
    },
    methods: {
    },
    computed: {
      isNavHiden: function () {
        let state = false;
        if (this.$store.state.meta) {
          state = this.$store.state.meta.isHideTopNav;
        }
        return state;
      }
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
    flex-wrap: nowrap;

    ul.nav-list {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      flex-wrap: wrap;
      flex-shrink: 0;
      background-color: #fff;
      overflow: auto; // 调试用

      li {
        display: inline-block;
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

        a.nuxt-link-exact-active,
        a.nuxt-link-active {
          & > span {
            font-weight: 800;
            border-bottom: #303133 solid 2px;
          }
        }
      }
    }

    .search-box {
      margin-left: 10px;
      border: 1px solid #444;
      box-shadow: -1px 1px 0 0 #222;
      padding: 8px 5px 8px 15px;
      background-color: #fff;
      transition: box-shadow 0.15s ease, border-color 0.15s ease;

      .input-box {
        padding: 8px 5px 8px 2px;
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
      .input-box,
      .input-box::placeholder {
        color: #444;
        transition: color 0.15s ease;
      }

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

    &.no-nav {
      position: absolute;
      left: 0;
      width: 100%;
      background-color: transparent;
      border-color: transparent;

      ul.nav-list {
        opacity: 0;
        visibility: hidden;
      }

      .search-box {
        background-color: transparent;
        border-color: #eee;
        box-shadow: -1px 1px 0 0 #eee;

        i,
        .input-box,
        .input-box::placeholder {
          color: #fff;
        }

        &:hover,
        &.focus {
          border-color: #fff;
        }

        &.focus {
          box-shadow: -3px 3px 0 0 #fff;
        }
      }
    }
  }
</style>
