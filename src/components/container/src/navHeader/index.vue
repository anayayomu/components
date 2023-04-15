<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="isCollapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
let props = defineProps<{ isCollapse: boolean }>();
let emits = defineEmits(["update:isCollapse"]);
let toggle = () => {
  emits("update:isCollapse", !props.isCollapse);
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
