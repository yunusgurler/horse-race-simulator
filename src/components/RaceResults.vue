<script setup>
import { computed, ref } from "vue";
import store from "@/store";
import SummaryBar from "./results/SummaryBar.vue";
import RoundItem from "./results/RoundItem.vue";

const schedule = computed(() => store.getters["horses/getSchedule"]);

const openItems = ref([1]);

const toggleItem = (id) => {
  if (openItems.value.includes(id)) {
    openItems.value = openItems.value.filter((item) => item !== id);
  } else {
    openItems.value = [...openItems.value, id];
  }
};
</script>

<template>
  <div
    class="bg-zinc-900/50"
    style="
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
      padding: 12px;
    "
  >
    <SummaryBar />

    <div class="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
      <RoundItem
        v-for="round in schedule"
        :key="round.id"
        :round="round"
        :is-open="openItems.includes(round.id)"
        @toggle="toggleItem(round.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.collapsible-enter-active,
.collapsible-leave-active {
  transition: all 0.15s ease-out;
}
.collapsible-enter-from,
.collapsible-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
