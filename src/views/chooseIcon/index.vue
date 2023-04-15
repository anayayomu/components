<template>
  <div class="iconPage">
    <choose-icon title="chooseIcon" v-model:visible="visible">
      chooseIcon
    </choose-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style lang="less" scoped>
</style>
