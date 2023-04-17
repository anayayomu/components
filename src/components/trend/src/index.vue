<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        v-if="type === 'up'"
        :style="{ color: !reverseColor ? upColor : '#52c41a' }"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        v-else
        :style="{ color: !reverseColor ? downColor : '#f5222d' }"
      ></component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, useSlots } from "vue";
import { toLine } from "../../../utlis";

let props = defineProps({
  type: {
    type: String,
    default: "up",
  },
  text: {
    type: String,
    default: "trend",
  },
  upColor: {
    type: String,
    default: "#f5222d",
  },
  downColor: {
    type: String,
    default: "#52c41a",
  },
  reverseColor: {
    type: Boolean,
    default: false,
  },
  upTextColor: {
    type: String,
    default: "#f5222d",
  },
  downTextColor: {
    type: String,
    default: "#52c41a",
  },
  upIcon: {
    type: String,
    default: "ArrowUp",
  },
  downIcon: {
    type: String,
    default: "ArrowDown",
  },
});

onMounted(() => {
  if (props.reverseColor) {
  }
});

let slots = useSlots();

let textColor = computed(() => {
  return props.type === "up" ? props.upTextColor : props.downTextColor;
});

//
</script>

<style lang="less" scoped>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 5px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
