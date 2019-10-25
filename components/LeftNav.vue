<template>
  <div id="LeftNav" class="leftNav">
    <div class="logo">logo</div>
    <div class="navbar">
      <ul class="leftNavBar">
        <nuxt-link tag="li" to="/" class="navItem">首页</nuxt-link>
        <nuxt-link tag="li" to="/ph1" class="navItem">人物导航</nuxt-link>
        <div class="whiteLine"></div>
        <nuxt-link tag="li" to="/ph2" class="navItem">
          <div class="titleBlock">
            <span slot="title">混沌之脑</span>
            <div class="enTitle">Chaos;Head</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/steins-gate" class="navItem">
          <div class="titleBlock">
            <span slot="title">命运石之门</span>
            <div class="enTitle">Steins;Gate</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph3" class="navItem">
          <div class="titleBlock">
            <span slot="title">机器人笔记</span>
            <div class="enTitle">Robotics;Notes</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph4" class="navItem">
          <div class="titleBlock">
            <span slot="title">混沌之子</span>
            <div class="enTitle">Chaos;Child</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph5" class="navItem">
          <div class="titleBlock">
            <span slot="title">超自然九人组</span>
            <div class="enTitle">Occultic;Nine</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph6" class="navItem">
          <div class="titleBlock">
            <span slot="title">匿名代码</span>
            <div class="enTitle">Amonymous;Code</div>
          </div>
        </nuxt-link>
        <div class="whiteLine"></div>
        <nuxt-link tag="li" to="/ph7" class="navItem">创建账户</nuxt-link>
        <nuxt-link tag="li" to="/ph8" class="navItem">登陆</nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  @import "~/assets/styles/LeftNav.scss";

  .navItem {
    font-size: 14px;
    color: #fff;
    padding: 0 20px;
    cursor: pointer;
    transition: all 0.15s ease;
    box-sizing: border-box;
    height: 56px;
    line-height: 56px;
    list-style: none;
    position: relative;
    white-space: nowrap;
  }
</style>