<template>
  <div class="flex flex-col iconWrapper">
    <div class="iconHolder h-full rounded-lg" :class="{ color }"></div>
    <div class="textHolder text-center">
      {{ icon.state }}
    </div>
  </div>
</template>

<script setup lang="ts">
type prop = {
  icon: {
    state: string;
    icon?: string;
    color?: string;
  };
};
const props = defineProps<prop>();
const { color } = props.icon;
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
</style>
