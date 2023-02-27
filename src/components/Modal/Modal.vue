<template>
  <div v-if="modalStore.visible" class="modalWrapper">
    <div class="modal">
      <div class="modalNavigation">
        <div
          v-for="(tag, short) in navigation"
          @click="changeContent(short)"
          class="navigationItem"
          :class="{ active: short === activeNavigation }"
        >
          {{ tag }}
        </div>
        <div class="absolute bottom-0 w-full">
          <div class="save-button" @click="saveModal">Save</div>
        </div>
      </div>
      <div class="modalContent">
        <component :is="activeComponent"></component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useModalStore } from "../../stores/ModalStore";
import ColorPickerModal from "./ModalContents/ModalColorPicker.vue";
import PrefabAssetsVue from "./ModalContents/PrefabAssets.vue";
import YourAssetsVue from "./ModalContents/YourAssets.vue";

const navigation = {
  colorPicker: "Color Picker",
  prefabAssets: "Prefab Assets",
  yourAssets: "Your Assets",
};

const modalStore = useModalStore();
const activeNavigation = ref("colorPicker");
const activeComponent = computed(() => {
  switch (activeNavigation.value) {
    case "colorPicker":
      return ColorPickerModal;
    case "prefabAssets":
      return PrefabAssetsVue;
    case "yourAssets":
      return YourAssetsVue;
    default:
      return ColorPickerModal;
  }
});

function changeContent(content: string) {
  activeNavigation.value = content;
}
function saveModal() {
  modalStore.visible = false;
}
</script>

<style scoped lang="scss">
.modalWrapper {
  @apply absolute w-full h-full top-0 flex justify-center items-center;
  background-color: rgba(0, 0, 0, 0.7);

  .modal {
    width: 70%;
    height: 60%;
    background-color: var(--tile);
    @apply rounded-lg flex;
    .modalContent {
      @apply w-full;
    }
  }
}

.modalNavigation {
  @apply flex flex-col w-1/6 h-full relative;
  border: 0px solid var(--highlight);
  border-right-width: 1px;
  .navigationItem {
    @apply py-4 px-6;
  }
  .save-button {
    @apply flex h-full flex-col  m-2 rounded-lg p-2 justify-center text-center;

    background-color: var(--highlight);
    color: var(--text);
  }
}
</style>
