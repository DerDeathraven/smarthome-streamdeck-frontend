<template>
  <div class="flex flex-col iconWrapper">
    <div
      class="iconHolder h-full rounded-lg"
      :class="{ color }"
      @click="handleIconChange()"
    ></div>
    <div
      class="textHolder text-center"
      v-if="!changeText"
      @click="changeText = true"
    >
      {{ stateText }}
    </div>
    <div class="textHolder" v-else>
      <input
        v-model="stateText"
        @keyup="handleChangeText"
        @focusout="handleChangeText($event, true)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type prop = {
  icon: {
    state: string;
    icon?: string;
    color?: string;
  };
};

const props = defineProps<prop>();
const { color, state, icon } = props.icon;
const emits = defineEmits(["@update:state"]);
const stateText = ref(state);
const iconPath = ref(icon);
const colorCode = ref(color);
const changeText = ref(false);

function handleChangeText(event: any, focusout: boolean) {
  if (event.keyCode !== 13 && !focusout) return;
  const target = event.target as HTMLInputElement;
  stateText.value = target.value;
  changeText.value = false;
  emitObject();
}
function emitObject() {
  const emit = {
    state: stateText.value,
    icon: iconPath.value,
    color: colorCode.value,
  };
  emits("@update:state", emit);
}

function handleIconChange() {}
</script>

<style scoped lang="scss">
.iconWrapper {
  width: 80px;
  height: 100px;
  background-color: var(--highlight);
  @apply rounded-lg;
}
.iconHolder {
  &.color {
    background-color: v-bind(color);
  }
}
.textHolder {
  width: 100%;
  input {
    width: 100%;
    @apply rounded-b-lg text-black;
  }
}
</style>
