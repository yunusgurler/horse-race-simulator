<template>
  <div class="py-4 space-y-3">
    <div
      v-for="(horse, index) in activeHorses"
      :key="horse.id"
      class="relative"
    >
      <div
        class="h-10 sm:h-12 rounded-lg bg-zinc-800/50 border border-zinc-700/50 relative overflow-hidden"
      >
        <Grid />
        <FinishLine />
        <HorsePosition :horse="horse" />
        <LaneLabel :horse="horse" :index="index" />
      </div>
    </div>
  </div>
</template>
<script setup>
import HorsePosition from "../horse/HorsePosition.vue";
import FinishLine from "./FinishLine.vue";
import Grid from "./Grid.vue";
import LaneLabel from "./LaneLabel.vue";

const props = defineProps(["activeHorses"]);
</script>
