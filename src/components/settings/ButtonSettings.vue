<template>
  <div class="flex flex-col">
    <label for="path">Path</label>
    <input
      type="text"
      name="path"
      v-model="activeButton!.typeSpecifigConfig.path"
    /><br />
    <label for="message">Message</label>
    <input
      type="text"
      name="message"
      v-model="activeButton!.typeSpecifigConfig.message"
      placeholder="sends 'true' if empty"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStateStore } from "../../stores/StateStore";

const stateStore = useStateStore();
const refState = storeToRefs(stateStore);
const activeButton = refState.getActiveButton;
</script>

<style scoped>
input {
  @apply text-black;
}
</style>
