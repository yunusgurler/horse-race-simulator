<template>
  <div class="flex items-center gap-2 sm:gap-3">
    <!-- Generate Schedule -->
    <button
      :disabled="isLoading"
      @click="handleGenerateSchedule"
      class="inline-flex items-center justify-center rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-1.5 text-xs sm:text-sm font-medium text-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors transition-shadow"
    >
      <span v-if="!isLoading">Generate Schedule</span>
      <span v-else class="flex items-center gap-1">
        <span
          class="h-3 w-3 rounded-full border border-zinc-400 border-t-transparent animate-spin"
        />
        Running...
      </span>
    </button>

    <!-- Start Race -->
    <button
      :disabled="isLoading || !isGenerated"
      @click="handleStartRace"
      class="inline-flex items-center justify-center rounded-lg px-3 py-1.5 text-xs sm:text-sm font-semibold text-zinc-950 bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 shadow-md shadow-cyan-500/30 hover:from-emerald-300 hover:via-cyan-300 hover:to-sky-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-zinc-950 transition-colors transition-shadow"
    >
      Start Race
    </button>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed, ref } from "vue";

const isLoading = computed(() => store.getters["horses/isLoading"]);
const isGenerated = ref(false);

const handleGenerateSchedule = async () => {
  await store.dispatch("horses/generateHorses");
  await store.dispatch("horses/generateSchedule");
  isGenerated.value = true;
};

const handleStartRace = async () => {
  if (!isGenerated.value) {
    alert("You have to generate a schedule first.");
    return;
  }
  await store.dispatch("horses/startRaces");
};
</script>

<style scoped>
/* Tailwind ile her şeyi hallettiğimiz için ekstra stil gerekmiyor.
   İstersen burayı boş bırakabilirsin. */
</style>
