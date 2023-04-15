<template>
  <div class="container">
    <el-container>
      <el-aside width="auto">
        <nav-side v-model:isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <navHeader v-model:is-collapse="isCollapse" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import navSide from "./navSide/index.vue";
import navHeader from "./navHeader/index.vue";

const isCollapse = ref(false);

//
</script>

<style lang="less" scoped>
.el-header {
  border-bottom: 1px solid #333;
}
</style>
