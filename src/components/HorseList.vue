<script setup>
import store from "@/store";
import { computed } from "vue";
import List from "./list/List.vue";
import SummaryBar from "./track/SummaryBar.vue";

const horses = computed(() => store.getters["horses/getHorses"]);
</script>

<template>
  <div
    class="space-y-2 overflow-y-auto max-h-none lg:max-h-[calc(100vh-200px)]"
  >
    <SummaryBar :horses="horses" />

    <List :horses="horses" />
  </div>
</template>

<style scoped></style>
