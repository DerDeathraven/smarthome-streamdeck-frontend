<template>
  <div>
    <div v-for="(rows, i) in buttonMatrix" class="flex gap-4">
      <div v-for="(config, j) in rows" class="flex gap-4 flex-col">
        <DeckButton :normalized-index="rows.length * i + j"></DeckButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getButtonArray } from "../service/StreamdeckService";
import { useStateStore } from "../stores/StateStore";
import DeckButton from "./DeckButton.vue";

const stateStore = useStateStore();
const buttonMatrix = await getButtonArray();
</script>

<style scoped></style>
