<template>
  <div>
    <div class="headline">
      <p>States</p>
    </div>
    <div class="icons">
      <Icon
        v-for="(icon, id) in stateStore.getActiveButton!.icons"
        :key="`${icon.icon}${icon.color}`"
        :icon="icon"
        @@update:state="storeRefs.getActiveButton.value!.icons[id] = $event"
      ></Icon>
      <div class="add-icon" @click="addIcon()">
        <p class="plus-icon">+</p>
        <p class="add-text">add State</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Icon from "./Icon.vue";
import { useStateStore } from "../../stores/StateStore";
import { storeToRefs } from "pinia";
import { openModal } from "../../stores/ModalStore";

const stateStore = useStateStore();
const storeRefs = storeToRefs(stateStore);

async function addIcon() {
  const icons = storeRefs.getActiveButton.value!.icons;
  icons.push({
    state: "false",
    color: "#ff0000",
  });
  const activeButton = storeRefs.getActiveButton.value;
  await openModal(activeButton!, icons.length - 1);
}
async function editIcon() {}
</script>

<style scoped lang="scss">
.icons {
  @apply flex gap-4 flex-wrap;
}
.add-icon {
  width: 80px;
  height: 100px;
  border-color: var(--highlight);
  color: var(--highlight);
  cursor: pointer;

  @apply rounded-lg border flex justify-center items-center flex-col;

  .plus-icon {
    font-size: x-large;
  }
  .add-text {
    height: 0%;
    overflow: hidden;
    transition: height 0.1s ease-in-out;
    will-change: auto;
  }
  &:hover {
    .add-text {
      height: 30%;
    }
  }
}
</style>
