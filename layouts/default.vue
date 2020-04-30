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
