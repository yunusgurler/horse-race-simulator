<script setup>
import Header from "./components/Header.vue";
import HorseList from "./components/HorseList.vue";
import RaceResults from "./components/RaceResults.vue";
import RaceTrack from "./components/RaceTrack.vue";
</script>

<template>
  <div class="min-h-screen bg-zinc-950 text-zinc-100">
    <Header />

    <div class="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-6">
      <div class="flex flex-col gap-6 lg:flex-row">
        <aside class="order-2 lg:order-1 w-full lg:w-80 lg:shrink-0">
          <HorseList />
        </aside>
        <main class="order-1 lg:order-2 flex-1 min-w-0">
          <RaceTrack />
        </main>

        <aside class="order-3 lg:order-3 w-full lg:w-96 lg:shrink-0">
          <RaceResults />
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
