<template>
  <div class="appWrapper">
    <Navbar></Navbar>
    <Suspense>
      <div class="flex w-full h-full justify-center items-center">
        <StreamDeck></StreamDeck>
      </div>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import Navbar from "./components/Navbar.vue";
import { getState } from "./service/StreamdeckService";
import StreamDeck from "./components/Streamdeck.vue";
onMounted(async () => {
  const data = await getState();
  console.log(data);
});
</script>
<style scoped>
.appWrapper {
  height: 80vh;
}
</style>
