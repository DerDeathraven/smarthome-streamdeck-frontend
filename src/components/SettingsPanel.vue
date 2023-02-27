<template>
  <div v-if="activeButton" class="settings">
    <div class="flex w-full justify-center gap-10">
      <div :class="activeButton.protocol == 'MQTT' ? 'active' : ''">MQTT</div>
      <div :class="activeButton.protocol == 'HTTP' ? 'active' : ''">HTTP</div>
    </div>
    <div class="flex w-full justify-center gap-10">
      <div @click="changeType('button')">Button</div>
      <div @click="changeType('buttonSwitch')">Switch</div>
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
  if (activeButton.value.type == "buttonSwitch") {
    return SwitchSettings;
  } else if (activeButton.value.type == "button") {
    return ButtonSettings;
  }
});
function changeType(type: string) {
  if (!activeButton.value) return;
  activeButton.value.type = type;
}
</script>

<style scoped>
.settings {
  @apply w-1/4 flex h-full flex-col mt-4 mx-2 rounded-lg p-4;

  background-color: var(--tile);
}
.save-button {
  @apply w-1/4 flex h-full flex-col  my-2 rounded-lg p-2 justify-center text-center;

  background-color: var(--highlight);
  color: var(--text);
}
</style>
