<template>
  <div id="leftNav" class="left-nav">
    <div class="logo">logo</div>
    <ul class="nav-item-list">
      <nuxt-link tag="li" to="/" class="nav-item" exact>首页</nuxt-link>
      <nuxt-link tag="li" to="/ph1" class="nav-item">人物导航</nuxt-link>
      <div class="hr"></div>
      <nuxt-link tag="li" class="nav-item" v-for="nav in navGroup" :key="nav.title" :to="nav.href">
        <div class="title-text-cn">{{ nav.title }}</div>
        <div class="title-text-en">{{ nav.subTitle }}</div>
      </nuxt-link>
      <div class="hr"></div>
      <nuxt-link tag="li" to="/ph7" class="nav-item">创建账户</nuxt-link>
      <nuxt-link tag="li" to="/ph8" class="nav-item">登陆</nuxt-link>
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
            subTitle: 'Amonymous;Code',
            href: '/ph6'
          },
        ]
      };
    }
  };
</script>

<style lang="scss">
  .left-nav {
    background-color: #000;
    padding-top: 10px;
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
    display: block;
    background-color: #000;
    padding: 15px 20px 0;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    box-sizing: border-box;
    height: 56px;
    list-style: none;
    white-space: nowrap;
    margin-bottom: 10px;
    transition: all 0.15s ease;

    .title-text-en {
      margin-top: 2px;
      font-size: 80%;
    }
  }

  .nav-item.nuxt-link-exact-active,
  .nav-item.nuxt-link-active,
  .nav-item:hover {
    background-color: #2196f3;
    color: #fff;
    width: 105%;
  }
</style>