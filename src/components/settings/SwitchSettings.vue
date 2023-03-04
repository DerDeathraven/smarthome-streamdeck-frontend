<template>
  <div class="flex flex-col">
    <label for="path">Outgoing Path</label>
    <input
      type="text"
      name="path"
      v-model="activeButton!.typeSpecifigConfig.path"
    />
    <label for="incomingPath">Incoming Path</label>
    <input
      type="text"
      name="incomingPath"
      v-model="activeButton!.typeSpecifigConfig.incomingPath"
    />
    <label for="onSpawn">On Bootup</label>
    <input
      type="text"
      name="onSpawn"
      v-model="activeButton!.typeSpecifigConfig.onBootup"
      placeholder="sends on device bootup"
    />
    <label for="message">Message</label>

    <input
      type="text"
      name="message"
      v-model="activeButton!.typeSpecifigConfig.message"
      placeholder="sends the active state if empty"
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
