<template>
  <div id="leftNav" class="left-nav">
    <div class="logo">logo</div>
    <div class="navbar">
      <ul class="left-navbar">
        <nuxt-link tag="li" to="/" class="nav-item" exact>首页</nuxt-link>
        <nuxt-link tag="li" to="/ph1" class="nav-item">人物导航</nuxt-link>
        <div class="hr"></div>
        <nuxt-link tag="li" to="/ph2" class="nav-item">
          <div class="title-block">
            <span slot="title">混沌之脑</span>
            <div class="en-text">Chaos;Head</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/steins-gate" class="nav-item">
          <div class="title-block">
            <span slot="title">命运石之门</span>
            <div class="en-text">Steins;Gate</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph3" class="nav-item">
          <div class="title-block">
            <span slot="title">机器人笔记</span>
            <div class="en-text">Robotics;Notes</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph4" class="nav-item">
          <div class="title-block">
            <span slot="title">混沌之子</span>
            <div class="en-text">Chaos;Child</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph5" class="nav-item">
          <div class="title-block">
            <span slot="title">超自然九人组</span>
            <div class="en-text">Occultic;Nine</div>
          </div>
        </nuxt-link>
        <nuxt-link tag="li" to="/ph6" class="nav-item">
          <div class="title-block">
            <span slot="title">匿名代码</span>
            <div class="en-text">Amonymous;Code</div>
          </div>
        </nuxt-link>
        <div class="hr"></div>
        <nuxt-link tag="li" to="/ph7" class="nav-item">创建账户</nuxt-link>
        <nuxt-link tag="li" to="/ph8" class="nav-item">登陆</nuxt-link>
      </ul>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .left-nav {
    background-color: #000;
    height: 100vh;
    // position: fixed;
    left: 0;
    z-index: 999;
    padding-top: 10px;
  }

  .logo {
    width: 80%;
    margin: auto;
    height: 100px;
    border: 1px solid #fff;
    // margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }

  .title-block {
    display: flex;
    flex-direction: column;
    line-height: 16px;
    padding: 15px 0;
  }

  .hr {
    background-color: #fff;
    height: 1px;
    width: 50%;
    margin: 15px 0 15px 15px;
  }

  .left-navbar {
    border-right: 0;
  }

  .nav-item {
    padding-left: 20px;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
  }

  .nav-item:not(:first-child) {
    margin-top: 10px;
  }

  .nav-item:hover {
    background-color: #2196f3;
    width: 105%;
  }

  .nav-item.nuxt-link-exact-active,
  .nav-item.nuxt-link-active {
    background-color: #2196f3;
    color: #fff;
    width: 105%;
  }

  .nav-item {
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