<template>
  <div class="chooseIcon c--choose-icon-dialog-height">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-dialog v-model="dialogVisible" :title="title">
      <div class="container">
        <div
          @click="clickItem(item)"
          class="item"
          v-for="(item, index) in Object.keys(ElIcons)"
          :key="index"
        >
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import * as ElIcons from "@element-plus/icons";
import { toLine } from "../../../utlis";
import { useCopy } from "../../../hooks/useCopy/index";

let props = defineProps<{
  title: string;
  visible: boolean;
}>();
let emits = defineEmits(["update:visible"]);
let dialogVisible = ref<boolean>(props.visible);
let handleClick = () => {
  emits("update:visible", !props.visible);
};

let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};

watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val;
  }
);
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
}
svg {
  width: 2em;
  height: 2em;
}
</style>
