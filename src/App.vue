<template>
  <div class="appWrapper">
    <Modal></Modal>
    <Navbar></Navbar>
    <Suspense>
      <div class="flex w-full h-full justify-center items-center">
        <StreamDeck class="w-full"></StreamDeck>
        <SettingsPanel></SettingsPanel>
      </div>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import StreamDeck from "./components/Streamdeck.vue";
import SettingsPanel from "./components/SettingsPanel.vue";
import Modal from "./components/Modal/Modal.vue";
</script>
<style scoped>
.appWrapper {
  height: 80vh;
}
</style>
