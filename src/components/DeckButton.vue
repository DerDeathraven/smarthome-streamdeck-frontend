<template>
  <div class="buttonWrapper" :class="generateClass()" @click="handleClick()">
    {{ normalizedIndex }}
  </div>
</template>

<script setup lang="ts">
import { ButtonSetting } from "../model/config";
import { useStateStore } from "../stores/StateStore";

type Prop = {
  normalizedIndex: number;
};
const props = defineProps<Prop>();
const stateStore = useStateStore();
const config = await generateConfig();

async function generateConfig(): Promise<ButtonSetting> {
  const state = await stateStore.getConfigState;
  const config = state.buttonSettings[props.normalizedIndex];
  if (config) return config;
  return {
    type: "button",
    icons: [],
    protocol: "MQTT",
    typeSpecifigConfig: {},
  };
}
function handleClick() {
  stateStore.activeIndex = props.normalizedIndex;
}

function generateClass() {
  const classes = [];
  const color = config.typeSpecifigConfig.state ? "green" : "red";
  classes.push(color);
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
  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
  &.active {
    outline: 2px solid var(--highlight);
  }
}
</style>
