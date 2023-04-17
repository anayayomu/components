<template>
  <div class="main-trend">
    <div class="flex">
      <div>
        <trend
          text="营业额"
          reverseColor
          upIcon="caretTop"
          upTextColor="blue"
        />
      </div>
      <div><trend text="销售额" type="down" reverseColor /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  div {
    margin-left: 10px;
  }
}
</style>
