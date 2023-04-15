<template>
  <div class="chooseArea">
    <el-select clearable placeholder="pro" v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      clearable
      :disabled="!province"
      placeholder="city"
      v-model="city"
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
    <el-select
      clearable
      :disabled="!province || !city"
      placeholder="area"
      v-model="area"
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import allArea from "../lib/pca-code.json";

export interface IAreaItem {
  name: string;
  code: string;
  children?: IAreaItem[];
}

export interface IAreaData {
  name: string;
  code: string;
}

let province = ref<string>("");
let city = ref<string>("");
let area = ref<string>("");

let areas = ref(allArea);

//computed实现
// let selectCity = computed(() => {
//   if (!province.value) return [];
//   else {
//     let cities = areas.value.find(
//       (item) => item.code === province.value
//     )?.children;
//     return cities;
//   }
// });
// let selectArea = computed(() => {
//   if (!city.value) return [];
//   else {
//     let area = selectCity.value?.find(
//       (item) => item.code === city.value
//     )?.children;
//     return area;
//   }
// });

//watch实现
let selectCity = ref<IAreaItem[]>([]);
let selectArea = ref<IAreaItem[]>([]);
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (item) => item.code === province.value
      )!.children;
      selectCity.value = cities;
    }
    city.value = "";
    area.value = "";
  }
);
watch(
  () => city.value,
  (val) => {
    if (val) {
      let area = selectCity.value?.find((item: any) => item.code === city.value)
        ?.children!;
      selectArea.value = area;
    }
    area.value = "";
  }
);

let emits = defineEmits(["send:chooseArea"]);
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: IAreaData = {
        code: province.value,
        name:
          province.value &&
          allArea.find((item) => item.code === province.value)!.name,
      };
      let cityData: IAreaData = {
        code: city.value,
        name:
          city.value &&
          selectCity.value.find((item) => item.code === city.value)!.name,
      };
      let areaData: IAreaData = {
        code: val,
        name: val && selectArea.value.find((item) => item.code === val)!.name,
      };
      emits("send:chooseArea", {
        province: provinceData,
        city: cityData,
        area: areaData,
      });
    }
  }
);

//
</script>

<style lang="less" scoped>
</style>
 