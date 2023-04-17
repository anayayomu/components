<template>
  <div class="side">
    <el-menu
      :collapse="isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="1">
        <el-icon-location />
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon-location />
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-location />
        <span>省市区选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-location />
        <span>趋势选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-location />
        <span>通知菜单</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{ isCollapse: boolean }>();
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
