<template>
  <div class="footer">
    <div class="left-block">
      <p>本页面最后编辑于2019-10-1</p>
      <p>除非另有声明，否则以非盈利的模式共享授权</p>
      <div class="d-flex">
        <nuxt-link class="footer-nav-item" to="/">隐私政策</nuxt-link>
        <nuxt-link class="footer-nav-item" to="/">科学ADV</nuxt-link>
        <nuxt-link class="footer-nav-item" to="/">中文wiki免责声明</nuxt-link>
      </div>
    </div>
    <div class="copy-right-block">
      <img class="image-1" src="~/assets/img/copyright/cc-by-nc-sa.png" alt />
      <img class="image-2" src="~/assets/img/copyright/poweredby_mediawiki_176x62.png" alt />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    }
  };
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 30px 15px 80px;
    background-color: #000;
    color: #fff;
    box-sizing: border-box;

    .left-block {
      font-size: 0.8em;

      & > p {
        margin-top: 0;
      }

      .footer-nav-item {
        margin-right: 1em;
        color: #eee;
      }
    }

    .copy-right-block {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 35px;

      img {
        margin-right: 10px;
      }
    }
  }
</style>