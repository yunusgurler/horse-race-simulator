<script setup>
import { computed, ref, watch, onUnmounted } from "vue";
import { useStore } from "vuex";
import Stats from "./track/Stats.vue";
import TrackLane from "./track/TrackLane.vue";
import SummaryBar from "./track/SummaryBar.vue";

const store = useStore();

const activeRoundId = computed(
  () => store.getters["horses/getActiveRoundId"] || null
);

const activeRound = computed(() => {
  const id = activeRoundId.value;
  if (!id) return null;
  const round = store.getters["horses/getRoundWithRoundId"](id);
  return round || null;
});

const elapsedMs = ref(0);
let timerId = null;

function computeTimeMs(roundDistance, horse) {
  const baseMs = roundDistance * 3;
  const condition = horse.condition ?? 50;
  const conditionBonus = (100 - condition) * 20;
  return baseMs + conditionBonus;
}

const activeHorses = computed(() => {
  const round = activeRound.value;
  if (!round || !Array.isArray(round.horses) || !round.distance) return [];

  const distance = round.distance;
  const now = elapsedMs.value;

  return round.horses.map((horse) => {
    const totalTime = computeTimeMs(distance, horse);
    const ratio = totalTime > 0 ? Math.min(1, now / totalTime) : 0;
    const place = 5 + ratio * 95;

    return {
      ...horse,
      place,
      timeMs: totalTime,
    };
  });
});

function startTimer() {
  if (timerId !== null) return;
  elapsedMs.value = 0;
  timerId = window.setInterval(() => {
    elapsedMs.value += 100;
  }, 100);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

watch(
  () => activeRound.value && activeRound.value.status,
  (status) => {
    console.log("[RaceTrack] status changed:", status);
    if (status === "in-progress") {
      startTimer();
    } else {
      stopTimer();
    }
  },
  { immediate: true }
);

watch(activeRoundId, () => {
  elapsedMs.value = 0;
});

onUnmounted(() => {
  stopTimer();
});

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

<template>
  <SummaryBar :activeRound="activeRound" :getStatusLabel="getStatusLabel" />

  <TrackLane
    v-if="activeRound && activeHorses.length"
    :activeHorses="activeHorses"
  />

  <Stats
    v-if="activeRound && activeHorses.length"
    :horse="activeHorses[0]"
    :competitors="activeHorses.length"
    :distance="activeRound.distance"
  />
</template>
