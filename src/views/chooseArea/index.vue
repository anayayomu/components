<template>
  <div class="Area">
    <choose-area @send:choose-area="getAreaData" />
  </div>
</template>

<script setup lang="ts">
let getAreaData = (data: any) => {
  console.log(data);
};
</script>

<style lang="less" scoped>
</style>
