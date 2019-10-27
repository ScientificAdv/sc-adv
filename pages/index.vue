<template>
  <div>
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
  .header {
    background-color: #000;
    color: #fff;
    padding: 50px;
    p {
      margin: 0;
    }
    h1 {
      margin: 10px 0;
    }
  }
</style>
