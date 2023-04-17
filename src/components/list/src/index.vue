<template>
  <div class="list list-tabs_item">
    <el-tabs>
      <el-tab-pane v-for="(item, idx) in list" :key="idx" :label="item.title">
        <el-scrollbar max-height="300px">
          <div
            class="container"
            v-for="(item1, index) in item.content"
            :key="index"
            @click="clickItem(item1, index)"
          >
            <div class="avatar" v-if="item1.avatar">
              <el-avatar size="small" :src="item1.avatar"></el-avatar>
            </div>
            <div class="content">
              <div v-if="item1.title" class="title">
                <div>{{ item1.title }}</div>
                <el-tag v-if="item1.tag" size="small" :type="item1.tagType">{{
                  item1.tag
                }}</el-tag>
              </div>
              <div class="timer" v-if="item1.desc">{{ item1.desc }}</div>
              <div class="timer" v-if="item1.time">{{ item1.time }}</div>
            </div>
          </div>
          <div class="actions">
            <div
              class="a-item"
              :class="{ border: idx !== actions.length }"
              v-for="(action, idx) in actions"
              :key="idx"
              @click="clickAction(action, idx)"
            >
              <div class="a-icon" v-if="action.icon">
                <component :is="`el-icon-${toLine(action.icon)}`" />
              </div>
              <div class="a-text">{{ action.text }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { IActionOptions, IListItem, IListOptions } from "./types";
import { toLine } from "../../../utlis";

let props = defineProps({
  list: {
    type: Array as PropType<IListOptions[]>,
    required: true,
  },
  actions: {
    type: Array as PropType<IActionOptions[]>,
    default: () => [],
  },
});

let emits = defineEmits(["clickItem", "clickAction"]);

let clickItem = (item1: IListItem, index: number) => {
  emits("clickItem", { item1, index });
};
let clickAction = (action: IActionOptions, idx: number) => {
  emits("clickAction", { action, idx });
};

//
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    background-color: #e6e6ff;
  }
}
.avatar {
  flex: 1;
}
.content {
  flex: 3;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .timer {
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
}
.actions {
  display: flex;
  height: 40px;
  align-items: center;
  border-top: 1px solid #eee;
  .a-item {
    height: 40px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .a-icon {
      margin-right: 4px;
    }
  }
}

.border {
  border-right: 1px solid #eee;
}
</style>
