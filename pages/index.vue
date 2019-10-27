<template>
  <div>
    <div class="bg-overlay">
      <div class="dynamic-elements-group">
        <div class="gears-group">
          <div class="dynamic-elements circle-lg">
            <img src="~assets/img/ui/dynamic-wallpaper/circle-lg.png" alt />
          </div>
          <div class="circle-sm dynamic-elements">
            <img src="~assets/img/ui/dynamic-wallpaper/circle-sm.png" alt />
          </div>
          <div class="gear-lg dynamic-elements">
            <img src="~assets/img/ui/dynamic-wallpaper/gear-lg.png" alt />
          </div>
        </div>
        <div class="gear-sm dynamic-elements">
          <img src="~assets/img/ui/dynamic-wallpaper/gear-sm.png" alt />
        </div>
      </div>
    </div>
    <header class="header">
      <p>欢迎来到</p>
      <h1>科学ADV中文Wiki</h1>
      <p>
        这是一个关于
        <em>科学ADV系列</em>的维基百科
      </p>
      <p>目前已有2个页面</p>
    </header>
  </div>
</template>

<script>
  export default {
    meta: {
      isHideTopNav: true
    },
    head() {
      return {
        title: '首页'
      }
    },
  }
</script>

<style lang="scss" scoped>
  .header,
  .bg-overlay {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }

  .bg-overlay {
    height: 300px;
    background-color: #000;
    background-image: url(~assets/img/ui/wallpaper-dynamic.png);
    background-size: cover;
    background-position: 0 0px;
    z-index: 1;
    overflow: hidden;
  }

  .dynamic-elements-group {
    .gears-group,
    .gear,
    .dynamic-elements {
      position: absolute;
    }
    .gears-group {
      bottom: 165px;
      right: 190px;
      opacity: 0.9;

      .circle-lg {
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        & > img {
          animation: myRotate 12s 0.6s linear infinite;
        }
      }
      .circle-sm {
        top: 26px;
        left: 23px;
        width: 150px;
        height: 150px;
        & > img {
          animation: myRotate 15s 0.3s linear infinite;
        }
      }
      .gear-lg {
        top: 64px;
        left: 63px;
        width: 80px;
        height: 80px;
        & > img {
          animation: myRotate 10s linear infinite;
        }
      }
    }
    .gear-sm {
      opacity: 0.8;
      bottom: -15px;
      right: 200px;
      width: 50px;
      height: 50px;
      & > img {
        animation: myRotate 15s 0.3s linear infinite;
      }
    }
  }

  @keyframes myRotate {
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(180deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  .header {
    z-index: 2;
    background-color: transparent;
    color: #fff;
    padding: 140px 50px 50px;
    p {
      margin: 0;
    }
    h1 {
      margin: 10px 0;
    }
  }
</style>
