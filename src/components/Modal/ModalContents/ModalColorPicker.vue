<template>
  <div class="flex flex-col h-full">
    <div class="h-2/3 flex justify-center items-center">
      <div class="color"></div>
    </div>
    <div class="flex flex-wrap p-5 gap-2 overflow-auto">
      <div
        v-for="color in colorArray"
        class="colorBlock"
        :style="`background-color:${color};`"
        @click="icon.color = color"
      ></div>

      <div class="colorBlock">
        <input type="color" @input="changeColorFromPicker" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useModalStore } from "../../../stores/ModalStore";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const storeRefs = storeToRefs(modalStore);
const icon = storeRefs.getActiveIconSettings;
const colorChange = computed(() => {
  return icon.value?.color || colorArray[0];
});
var colorArray = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

icon.value.color = icon.value.color || colorArray[0];

function changeColorFromPicker(event: Event) {
  const target = event.target as HTMLInputElement;
  icon.value.color = target.value;
}
</script>

<style scoped lang="scss">
.color {
  width: 80px;
  height: 80px;
  background-color: v-bind(colorChange);
  @apply rounded-lg;
}
.colorBlock {
  width: 70px;
  aspect-ratio: 1/1;
  @apply rounded-lg cursor-pointer;
  input {
    width: 100%;
    height: 100%;
    @apply cursor-pointer;
  }
}
</style>
