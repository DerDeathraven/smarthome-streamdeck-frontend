<template>
  <div v-if="activeButton" class="settings">
    <div class="flex w-full justify-center gap-10">
      <div class="selector-wrapper">
        <div
          class="selector left"
          :class="activeButton.protocol == 'MQTT' ? 'active' : ''"
          @click="selectProtocol('MQTT')"
        >
          MQTT
        </div>
        <div
          class="selector right"
          :class="activeButton.protocol == 'HTTP' ? 'active' : ''"
          @click="selectProtocol('HTTP')"
        >
          HTTP
        </div>
      </div>
    </div>

    <div>
      <component :is="setting" />
    </div>

    <IconStates></IconStates>
    <div class="flex justify-end">
      <div class="save-button" @click="stateStore.updateConfig()">Save</div>
    </div>

    <ActiveButtonLog></ActiveButtonLog>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useStateStore } from "../stores/StateStore";
import ButtonSettings from "./settings/ButtonSettings.vue";
import SwitchSettings from "./settings/SwitchSettings.vue";
import { computed } from "vue";
import ActiveButtonLog from "./ActiveButtonLog.vue";
import IconStates from "./Icons/IconStates.vue";
const stateStore = useStateStore();
const stateStoreRefs = storeToRefs(stateStore);
const activeButton = stateStoreRefs.getActiveButton;
const setting = computed(() => {
  if (!activeButton.value) return;
  if (activeButton.value.type == "switchButton") {
    activeButton.value.type = "buttonSwitch";
  }
  return SwitchSettings;
});

function selectProtocol(protocol: "MQTT" | "HTTP") {
  if (!activeButton.value) return;
  activeButton.value.protocol = protocol;
}
</script>

<style scoped lang="scss">
.settings {
  @apply w-1/4 flex h-full flex-col mt-4 mx-2 rounded-lg p-4;

  background-color: var(--tile);
}
.save-button {
  @apply w-1/4 flex h-full flex-col  my-2 rounded-lg p-2 justify-center text-center cursor-pointer;

  background-color: var(--highlight);
  color: var(--text);
}
.selector-wrapper {
  @apply flex py-1 w-1/3;

  .selector {
    @apply px-4 w-full cursor-pointer select-none;
    background-color: $background;
    &.active {
      background-color: var(--highlight);
    }
    &.left {
      @apply rounded-l-full;
    }
    &.right {
      @apply rounded-r-full;
    }
  }
}
</style>
