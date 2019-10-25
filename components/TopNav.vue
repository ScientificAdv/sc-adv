<template>
  <div id="topNav">
    <div class="menu">
      <ul class="nav-list">
        <li>作品中心</li>
        <li>人物介绍</li>
        <li>动画</li>
        <li>漫画</li>
        <li>广播剧</li>
        <li>小说</li>
        <li>音乐</li>
      </ul>
    </div>
    <div class="search-box">
      <input class="input-box" v-model="searchTxt" placeholder="在维基中搜索">
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      return {
        searchTxt: ''
      };
    },
    methods: {
    }
  };
</script>

<style lang="scss">
  @import "~/assets/styles/TopNav.scss";
</style>
