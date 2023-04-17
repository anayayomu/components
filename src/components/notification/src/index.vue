<template>
  <div class="notification">
    <el-popover placement="bottom" :width="300" trigger="click">
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge :value="value" :max="max" :is-dot="isDot">
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { toLine } from "../../../utlis";

let props = defineProps({
  icon: {
    type: String,
    default: "Bell",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped>
</style>
