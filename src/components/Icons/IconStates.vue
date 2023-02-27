<template>
  <div>
    <div class="headline">
      <p>States</p>
    </div>
    <div class="icons">
      <Icon v-for="icon in icons" :icon="icon"></Icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";

const icons = ref([
  {
    state: "true",
    color: "#ff0000",
  },
]);
</script>

<style scoped></style>
