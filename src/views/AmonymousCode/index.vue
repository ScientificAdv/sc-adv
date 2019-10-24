<template>
  <div class="home">
    <el-col class="leftNav" :span="3">
      <left-nav></left-nav>
    </el-col>
    <el-col class="center" :span="21">
      <div class="topNav">
        <top-nav></top-nav>
      </div>
      <div class="content">
        匿名代码
      </div>
      <div class="BottomNav">
        <bottom-nav></bottom-nav>
      </div>
    </el-col>
  </div>
</template>

<script>
import { Col, Row } from "element-ui";
import TopNav from "@/components/TopNav/index.vue";
import LeftNav from "@/components/LeftNav/index.vue";
import BottomNav from "@/components/BottomNav/index.vue";
export default {
  name: "home",
  components: {
    TopNav,
    LeftNav,
    BottomNav,
    [Col.name]: Col,
    [Row.name]: Row
  },
  data() {
    return {
      bannerImg: require("@/assets/indexImg/Steins-Gate-Free-Download-Banner.jpg"),

      topImg: require("@/assets/indexImg/sgzero.jpg"),
      bottomImg: require("@/assets/indexImg/steinsgate2.jpg"),

      imgOne: require("@/assets/indexImg/steinsgate_header.jpg"),
      imgTwo: require("@/assets/indexImg/bx9253-x1WUtyzJBXXX.jpg"),
      imgThree: require("@/assets/indexImg/712TvcUZLiL.jpg"),
      imgFour: require("@/assets/indexImg/61NSYs7ElaL._SL500_SS500_.jpg"),
      imgFive: require("@/assets/indexImg/EpigraphLNcover.jpg"),
      imgSix: require("@/assets/indexImg/F77413f4f9f8f09cacaeea87296032431379049256_full.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/Home.scss";
</style>
