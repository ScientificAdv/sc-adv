<template>
  <div class="page-container">
    <div class="left-nav">
      <left-nav></left-nav>
    </div>
    <div class="page-content">
      <top-nav></top-nav>
      <nuxt class="page-content-main" />
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
  import TopNav from "~/components/TopNav.vue";
  import LeftNav from "~/components/LeftNav.vue";
  import PageFooter from "~/components/Footer.vue";

  export default {
    transition: {
      mode: 'out-in'
    },
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

  .page-content {
    background-color: #fff;
    position: relative;
    margin-left: 180px;
  }

  .page-content-main {
    padding-top: 60px;
    min-height: 760px;
    position: relative;
  }
</style>
