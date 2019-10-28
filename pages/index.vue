<template>
  <div>
    <div class="placeholder" style="min-height:300px"></div>
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
    <main>
      <div class="container">
        <div class="section-block">
          <h2 class="title">
            <span>本站公告</span>
            <span class="sub-title-text">Notice</span>
          </h2>
          <p>咕咕咕咕咕</p>
          <p>咕咕咕</p>
          <p>咕咕咕咕</p>
          <p>咕咕咕咕咕？</p>
          <p>咕咕！</p>
          <p>咕咕！</p>
          <p>咕咕咕咕咕？</p>
          <p>咕咕咕咕。</p>
          <br />
        </div>
        <div class="section-block">
          <h2 class="title">
            <span>作品列表</span>
            <span class="sub-title-text">Works</span>
          </h2>
          <div class="category-list row">
            <nuxt-link
              class="list-item-container col-lg-4 col-md-6 col-sm-12"
              v-for="item in workItems"
              :key="item.title"
              :to="item.to"
              :title="item.title"
              tag="div"
            >
              <div class="list-item" :style="{'background-image': `url(${item.image})`}">
                <h3 class="item-title">
                  <span class="item-title-text">{{ item.title }}</span>
                  <div class="item-subtitle-text">{{ item.subTitle }}</div>
                </h3>
                <div class="list-item-shade"></div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </main>
    <div class="placeholder" style="min-height:150px"></div>
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
    data() {
      return {
        workItems: [
          {
            title: '混沌之脑',
            subTitle: 'Chaos;Head',
            image: require('~/assets/img/ch/ch_game_cover.jpg'),
            to: '/'
          },
          {
            title: '命运石之门',
            subTitle: 'Steins;Gate',
            image: require('~/assets/img/sg/sg_animate_cover.jpg'),
            to: '/steins-gate'
          },
          {
            title: '机器人笔记',
            subTitle: 'Robotics;Notes',
            image: require('~/assets/img/rn/rn_game_cover.jpg'),
            to: '/'
          },
          {
            title: '混沌之子',
            subTitle: 'Chaos;Child',
            image: require('~/assets/img/cc/cc_game_cover.png'),
            to: '/'
          },
          {
            title: '超自然九人组',
            subTitle: 'Occultic;Nine',
            image: require('~/assets/img/on/on_anime_cover.jpg'),
            to: '/'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~/assets/styles/_column_main.scss";

  @keyframes gearRotate {
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
          animation: gearRotate 12s 0.6s linear infinite;
        }
      }
      .circle-sm {
        top: 26px;
        left: 23px;
        width: 150px;
        height: 150px;
        & > img {
          animation: gearRotate 15s 0.3s linear infinite;
        }
      }
      .gear-lg {
        top: 64px;
        left: 63px;
        width: 80px;
        height: 80px;
        & > img {
          animation: gearRotate 10s linear infinite;
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
        animation: gearRotate 15s 0.3s linear infinite;
      }
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

  .category-list .list-item {
    height: 360px;

    .item-subtitle-text {
      font-weight: 500;
      font-size: 70%;
    }

    .list-item-shade {
      opacity: 0.5;
    }
  }
</style>
