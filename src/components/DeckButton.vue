<template>
  <div class="buttonWrapper" :class="generateClass()" @click="handleClick()">
    {{ normalizedIndex }}
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ButtonSetting } from "../model/config";
import { useStateStore } from "../stores/StateStore";

type Prop = {
  normalizedIndex: number;
};
const props = defineProps<Prop>();
const stateStore = useStateStore();
const config = await stateStore.getButtonConfig(props.normalizedIndex);
const color = computed(() => {
  if (!config) return "#ff0000";
  const state = config.typeSpecifigConfig.state;
  return config.icons.find((icon) => icon.state === state)?.color || "#ff0000";
});

function handleClick() {
  stateStore.activeIndex = props.normalizedIndex;
}

function generateClass() {
  const classes = [];
  const isActive =
    stateStore.activeIndex === props.normalizedIndex ? "active" : "";
  classes.push(isActive);
  return classes;
}
</script>

<style scoped lang="scss">
.buttonWrapper {
  @apply flex justify-center items-center bg-black my-2 rounded-xl;
  width: 80px;
  aspect-ratio: 1/1;
  background-color: v-bind(color);
  &.active {
    outline: 2px solid var(--highlight);
  }
}
</style>
