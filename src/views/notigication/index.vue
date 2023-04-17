<template>
  <div class="m-notification">
    <notification :value="50" :max="30">
      <template #default>
        <list
          @clickItem="clickItem"
          @clickAction="clickAction"
          :list="listItem"
          :actions="actions"
        />
      </template>
    </notification>
  </div>
</template>

<script setup lang="ts">
import { listItem, actions } from "../../components/list/data";

let clickItem = (val: any) => {
  console.log(val);
};
let clickAction = (val: any) => {
  console.log(val);
};
</script>

<style lang="less" scoped>
</style>
