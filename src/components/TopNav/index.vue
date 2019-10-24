<template>
  <div id="topNav">
    <div class="menu">
      <el-menu
        class="topNav"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">作品中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">人物介绍</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">动画</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项1</el-menu-item>
            <el-menu-item index="3-4-2">选项2</el-menu-item>
            <el-menu-item index="3-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">漫画</template>
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
          <el-submenu index="4-4">
            <template slot="title">选项4</template>
            <el-menu-item index="4-4-1">选项1</el-menu-item>
            <el-menu-item index="4-4-2">选项2</el-menu-item>
            <el-menu-item index="4-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">广播剧</template>
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
          <el-submenu index="5-4">
            <template slot="title">选项4</template>
            <el-menu-item index="5-4-1">选项1</el-menu-item>
            <el-menu-item index="5-4-2">选项2</el-menu-item>
            <el-menu-item index="5-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">小说</template>
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
          <el-menu-item index="6-3">选项3</el-menu-item>
          <el-submenu index="6-4">
            <template slot="title">选项4</template>
            <el-menu-item index="6-4-1">选项1</el-menu-item>
            <el-menu-item index="6-4-2">选项2</el-menu-item>
            <el-menu-item index="6-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">音乐</template>
          <el-menu-item index="7-1">选项1</el-menu-item>
          <el-menu-item index="7-2">选项2</el-menu-item>
          <el-menu-item index="7-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="7-4-1">选项1</el-menu-item>
            <el-menu-item index="7-4-2">选项2</el-menu-item>
            <el-menu-item index="7-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </div>
    <div class="input">
      <el-input v-model="inputName" placeholder="在维基中搜索"></el-input>
    </div>
  </div>
</template>

<script>
import { Menu, Submenu, MenuItem, MenuItemGroup, Input } from "element-ui";
export default {
  components: {
    [Input.name]: Input,
    [Menu.name]: Menu,
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem,
    [MenuItemGroup.name]: MenuItemGroup
  },
  data() {
    return {
      inputName:''
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/TopNav.scss";
</style>