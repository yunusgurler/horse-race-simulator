<template>
  <div
    class="p-3 sm:p-4 border-b border-primary bg-gradient-to-r from-yellow-500/10 to-blue-500/10"
    style="border-top-left-radius: 10px; border-top-right-radius: 10px"
  >
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
    >
      <div class="flex items-center gap-3">
        <div>
          <h2 v-if="!activeRound" class="text-white text-base sm:text-lg">
            Race not started yet
          </h2>
          <h2 v-else class="text-white text-base sm:text-lg">
            {{ "Round " + activeRound.id + " " + activeRound.title }}
          </h2>
          <p class="text-xs sm:text-sm text-zinc-500 mt-0.5">Horse Race</p>
        </div>
      </div>
      <div class="flex items-center gap-2 text-xs sm:text-sm text-zinc-400">
        <span>{{ getStatusLabel(activeRound?.status) }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["activeRound"]);
const getStatusLabel = (status) => {
  switch (status) {
    case "finished":
      return "Finished";
    case "in-progress":
      return "In Progress";
    default:
      return "Pending";
  }
};
</script>
