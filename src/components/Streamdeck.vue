<template>
  <div>
    <div v-for="(rows, i) in buttonMatrix" class="flex gap-4 justify-center">
      <div v-for="(config, j) in rows" class="flex gap-4 flex-col">
        <DeckButton :normalized-index="rows.length * i + j"></DeckButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getButtonArray } from "../service/StreamdeckService";
import { useStateStore } from "../stores/StateStore";
import DeckButton from "./DeckButton.vue";
import { socket } from "../service/SocketService";

const stateStore = useStateStore();
const buttonMatrix = await getButtonArray();
onMounted(() => {
  socket.on("buttonStateChange", (data) => {
    data = JSON.parse(data);

    const button = stateStore.configState?.buttonSettings[data.index];
    if (!button) return;
    button.typeSpecifigConfig.state = data.message;
  });
});
</script>

<style scoped>
.active {
  outline-color: var(--highlight);
}
</style>
