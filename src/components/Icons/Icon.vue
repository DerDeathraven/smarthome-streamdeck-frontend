<template>
  <div class="flex flex-col iconWrapper">
    <div
      class="iconHolder h-full rounded-lg cursor-pointer"
      :class="{ color }"
    ></div>
    <div class="textHolder text-center">
      {{ stateText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type prop = {
  icon: {
    state: string;
    icon?: string;
    color?: string;
  };
};

const props = defineProps<prop>();
const { color, state } = props.icon;
const stateText = ref(state);
</script>

<style scoped lang="scss">
.iconWrapper {
  width: 80px;
  height: 100px;
  background-color: var(--highlight);
  @apply rounded-lg;
}
.iconHolder {
  &.color {
    background-color: v-bind(color);
  }
}
.textHolder {
  width: 100%;
  input {
    width: 100%;
    @apply rounded-b-lg text-black;
  }
}
</style>
