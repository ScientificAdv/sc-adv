<template>
  <nav id="topNav" class="top-nav" :class="{'no-nav': isNavHiden}">
    <ul class="nav-list">
      <li class="nav-list-item" v-for="item in navItems" :key="item.text">
        <nuxt-link
          :to="item.to"
          :exact="item.is_exact"
          v-if="!item.dropdowns || item.dropdowns.length===0"
        >
          <span>{{ item.text }}</span>
        </nuxt-link>
        <dropdown-menu v-model="item.is_expand" transition="translate-fade-down" v-else>
          <button class="dropdown-toggle" :class="{'is-expand': item.is_expand }">
            <span>{{ item.text }}</span>
            <i class="iconfont icondown"></i>
          </button>
          <ul slot="dropdown" class="dropdown-list">
            <li class="dropdown-list-item" v-for="dropdown in item.dropdowns" :key="dropdown.title">
              <nuxt-link
                class="dropdown-item"
                :to="dropdown.to"
                :exact="dropdown.is_exact"
              >{{ dropdown.title }}</nuxt-link>
            </li>
          </ul>
        </dropdown-menu>
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
  import DropdownMenu from '@innologica/vue-dropdown-menu'
  export default {
    components: {
      DropdownMenu
    },
    data() {
      return {
        searchTxt: '',
        isSearchFocus: false,
        navItems: [
          {
            text: '作品中心',
            to: '/steins-gate',
            is_exact: true
          },
          {
            text: '角色汇总',
            to: '/steins-gate/character',
          },
          {
            text: '游戏',
            to: '/steins-gate/game',
            dropdowns: [
              {
                title: '命运石之门（游戏）',
                to: ''
              },
              {
                title: '命运石之门 比翼恋理的爱人',
                to: ''
              },
              {
                title: '命运石之门 线性拘束的树状图',
                to: ''
              },
              {
                title: '命运石之门0‎‎‎‎ （游戏）',
                to: ''
              },
            ]
          },
          {
            text: '动画',
            to: '/steins-gate/anime',
            dropdowns: [
              {
                title: '命运石之门（动画）',
                to: ''
              },
              {
                title: '命运石之门 负荷领域的既视感',
                to: ''
              },
              {
                title: '命运石之门 聪明睿智的感知运算',
                to: ''
              },
              {
                title: '命运石之门0（动画）',
                to: ''
              },
            ]
          },
          {
            text: '漫画',
            to: '/steins-gate/comic',
          },
          {
            text: '广播剧',
            to: '/steins-gate/drama',
            dropdowns: [
              {
                title: '时限轮转的琶音',
                to: ''
              },
            ]
          },
          {
            text: '官方小说',
            to: '/steins-gate/novel',
            dropdowns: [
              {
                title: '圆环连锁のウロボロス',
                to: ''
              },
              {
                title: 'STEINS;GATE 蝶翼のダイバージェンス',
                to: ''
              },
              {
                title: 'STEINS;GATE2 形而上のネクローシス',
                to: ''
              },
              {
                title: '命运石之门：闭时曲线的碑铭',
                to: ''
              },
              {
                title: '命运石之门：永劫回归的潘朵拉',
                to: ''
              },
              {
                title: '命运石之门：无限远点的天鹰座α',
                to: ''
              },
              {
                title: '命运石之门 承认共鸣的容赦',
                to: ''
              },
              {
                title: '命运石之门 承认共鸣的赠呈',
                to: ''
              }
            ]
          },
          {
            text: '音乐',
            to: '/steins-gate/ablum',
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
    },
    created() {
      const vm = this;
      this.navItems.forEach(el => {
        if (el.dropdowns && el.dropdowns.length > 0) {
          vm.$set(el, 'is_expand', false);
        }
      });
    }
  };
</script>

<style lang="scss" scoped>
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

      & > li.nav-list-item {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        margin: 0;
        font-size: 14px;
        color: #303133;
        padding: 2px 7px;
        cursor: pointer;
        transition: all 0.15s;
        box-sizing: border-box;
        margin-right: 7px;

        & > a {
          border: #eee solid 2px;
          padding: 2px 7px;
        }

        & > a.nuxt-link-exact-active,
        & > a.nuxt-link-active {
          & > span {
            font-weight: 800;
          }
          border-color: #222;
        }
      }
    }

    .dropdown {
      position: relative;
      & > button.dropdown-toggle {
        border: none;
        cursor: pointer;
        border: #eee solid 2px;
        padding: 2px 7px;
        &.is-expand {
          border-color: #222;
        }
      }
      & > .dropdown-menu {
        float: right;
        position: absolute;
        top: 45px;
        background-color: #fff;
        min-width: 15em;
        border: #222 solid 2px;
      }

      .dropdown-list {
        padding: 8px 5px;
      }
      .dropdown-list-item {
        padding: 5px 6px;
        margin: 5px 3px;
        line-height: initial;
        &:hover {
          background-color: #efefef;
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
