<template>
  <div class="page-container">
    <div class="left-nav">
      <left-nav></left-nav>
    </div>
    <div class="page-content">
      <top-nav></top-nav>
      <nuxt />
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import TopNav from "~/components/TopNav.vue";
  import LeftNav from "~/components/LeftNav.vue";
  import PageFooter from "~/components/Footer.vue";

  export default {
    components: {
      TopNav,
      LeftNav,
      PageFooter
    }
  }

</script>

<style lang="scss">
  .page-container {
    background-color: #000;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    width: 100%;
  }

  .left-nav {
    width: 180px;
    float: left;
    position: fixed;
    z-index: 10000;
  }

  .page-content {
    background-color: #fff;
    position: relative;
    margin-left: 180px;
    padding-top: 60px;
  }
</style>
