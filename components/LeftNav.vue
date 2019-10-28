<template>
  <div id="leftNav" class="left-nav">
    <div class="logo">logo</div>
    <ul class="nav-item-list">
      <li class="nav-item">
        <nuxt-link to="/" class="nav-item-link" exact>
          <div class="nav-item-content">首页</div>
          <div class="nav-item-shade"></div>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/ph1" class="nav-item-link">
          <div class="nav-item-content">人物导航</div>
          <div class="nav-item-shade"></div>
        </nuxt-link>
      </li>
      <div class="hr"></div>
      <li class="nav-item" v-for="nav in navGroup" :key="nav.title">
        <nuxt-link class="nav-item-link" :to="nav.href">
          <div class="nav-item-content">
            <div class="text-cn">{{ nav.title }}</div>
            <div class="text-en">{{ nav.subTitle }}</div>
          </div>
          <div class="nav-item-shade"></div>
        </nuxt-link>
      </li>
      <div class="hr"></div>
      <li class="nav-item">
        <nuxt-link to="/ph7" class="nav-item-link">
          <div class="nav-item-content">创建账户</div>
          <div class="nav-item-shade"></div>
        </nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link to="/ph8" class="nav-item-link">
          <div class="nav-item-content">登陆</div>
          <div class="nav-item-shade"></div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navGroup: [
          {
            title: '混沌之脑',
            subTitle: 'Chaos;Head',
            href: '/ph2'
          },
          {
            title: '命运石之门',
            subTitle: 'Steins;Gate',
            href: '/steins-gate'
          },
          {
            title: '机器人笔记',
            subTitle: 'Robotics;Notes',
            href: '/ph3'
          },
          {
            title: '混沌之子',
            subTitle: 'Chaos;Child',
            href: '/ph4'
          },
          {
            title: '超自然九人组',
            subTitle: 'Occultic;Nine',
            href: '/ph5'
          },
          {
            title: '匿名代码',
            subTitle: 'Anonymous;Code',
            href: '/ph6'
          }
        ]
      };
    }
  };
</script>

<style lang="scss">
  .left-nav {
    background-color: #000;
    padding-top: 10px;
    width: 180px;
    float: left;
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 10000;
  }

  .logo {
    width: 80%;
    margin: auto;
    height: 100px;
    border: 1px solid #fff;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }

  .hr {
    background-color: #fff;
    height: 1px;
    width: 50%;
    margin: 15px 0 15px 15px;
  }

  .nav-item-list {
    padding-top: 15px;
  }

  .nav-item {
    position: relative;
    display: block;
    background-color: #000;
    cursor: pointer;
    box-sizing: border-box;
    height: 56px;
    list-style: none;
    margin-bottom: 10px;
    transition: background-color 0.15s ease;

    .nav-item-link {
      padding: 15px 20px 0;
      display: block;
      position: relative;
      color: #fff;
      font-size: 14px;
      height: 56px;
      white-space: nowrap;
    }

    .nav-item-content,
    .nav-item-shade {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .nav-item-content {
      top: 15px;
      left: 20px;
      z-index: 2;

      .text-en {
        margin-top: 2px;
        font-size: 80%;
      }
    }

    .nav-item-shade {
      width: 0;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: transparent;
      transition: background-color 0.15s ease, width 0.2s ease;
    }
  }

  .nav-item:hover {
    background-color: #222;
    transition: background-color 0.15s ease;
  }

  .nav-item-link.nuxt-link-exact-active,
  .nav-item-link.nuxt-link-active {
    .nav-item-shade {
      background-color: #2196f3;
      width: 105%;
      transition: background-color 0.2s ease, width 0.2s ease;
    }
  }
</style>