<template>
  <div></div>
</template>

<script setup lang="ts">
import { socket } from "../service/SocketService";
import { useStateStore } from "../stores/StateStore";

const stateStore = useStateStore();
function setHandler() {
  socket.on(
    stateStore.getActiveButton?.typeSpecifigConfig.incomingPath,
    () => {}
  );
}
stateStore.$subscribe(() => {
  setHandler();
});
</script>

<style scoped></style>
