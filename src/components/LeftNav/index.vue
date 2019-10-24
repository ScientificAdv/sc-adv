<template>
  <div id="LeftNav">
    <div class="logo">logo</div>
    <div class="NavBar">
      <el-menu
        :default-active="$route.path"
        router
        class="el-menu-vertical-demo leftNavBar"
        @open="handleOpen"
        @close="handleClose"
        background-color="#000"
        text-color="#fff"
        active-text-color="#2196f3"
      >
        <el-menu-item class="navItem" index="/">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item class="navItem" index="character">
          <span slot="title">人物导航</span>
        </el-menu-item>
        <!--分割线-->
        <div class="whiteLine"></div>
        <el-menu-item class="navItem" index="chaosHead">
          <div class="titleBlock">
            <span slot="title">混沌之脑</span>
            <div class="enTitle">Chaos;Head</div>
          </div>
        </el-menu-item>
        <el-menu-item class="navItem" index="steinsGate">
          <div class="titleBlock">
            <span slot="title">命运石之门</span>
            <div class="enTitle">Steins;Gate</div>
          </div>
        </el-menu-item>
        <el-menu-item class="navItem" index="roboticsNotes">
          <div class="titleBlock">
            <span slot="title">机器人笔记</span>
            <div class="enTitle">Robotics;Notes</div>
          </div>
        </el-menu-item>
        <el-menu-item class="navItem" index="chaosChild">
          <div class="titleBlock">
            <span slot="title">混沌之子</span>
            <div class="enTitle">Chaos;Child</div>
          </div>
        </el-menu-item>

        <el-menu-item class="navItem" index="occulticNine">
          <div class="titleBlock">
            <span slot="title">超自然九人组</span>
            <div class="enTitle">Occultic;Nine</div>
          </div>
        </el-menu-item>
        <el-menu-item class="navItem" index="amonymousCode">
          <div class="titleBlock">
            <span slot="title">匿名代码</span>
            <div class="enTitle">Amonymous;Code</div>
          </div>
        </el-menu-item>
        <!--分割线-->
        <div class="whiteLine"></div>
        <el-menu-item class="navItem" index="register">
          <span slot="title">创建账户</span>
        </el-menu-item>
        <el-menu-item class="navItem" index="login">
          <span slot="title">登陆</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup } from "element-ui";
export default {
  components: {
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/LeftNav.scss";
</style>