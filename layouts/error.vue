<template>
  <div class="error-page-container container">
    <h1>404 Not Found</h1>
    <p>Ouch,找不到网页了</p>
  </div>
</template>

<script>
  export default {
    scrollToTop: true,
    transition: {
      mode: 'out-in'
    },
    head() {
      return {
        title: '出错了'
      }
    },
  }
</script>

<style lang="scss" scoped>
</style>