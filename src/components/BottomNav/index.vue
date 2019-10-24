<template>
  <div class="bottomBlock">
    <div class="leftBlock">
      <div class="titleOne">本页面最后编辑于2019-10-1</div>
      <div class="titleTwo">除非另有声明，否则以非盈利的模式共享授权</div>
      <div class="titleThree">
        <div class="subTitleOne">隐私政策</div>
        <div class="subTitleTwo">科学ADV</div>
        <div class="subTitleThree">中文wiki免责声明</div>
      </div>
    </div>
    <div class="rightBlock">
      <img class="ImgOne" :src="copyRightImgOne" alt />
      <img class="ImgTwo" :src="copyRightImgTwo" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyRightImgOne: require("@/assets/BottomNavImg/cc-by-nc-sa.png"),
      copyRightImgTwo: require("@/assets/BottomNavImg/poweredby_mediawiki_176x62.png")
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/BottomNav.scss";
</style>