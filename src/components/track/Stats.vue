<template>
  <div class="p-3 sm:p-4 border-t border-zinc-800 bg-zinc-800/30">
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
      <div>
        <p class="text-xs text-zinc-500">Distance</p>
        <p class="text-sm text-cyan-400 mt-1">{{ distance }}</p>
      </div>
      <div>
        <p class="text-xs text-zinc-500">Leader</p>
        <p class="text-sm text-green-400 mt-1">
          {{ horse?.name || "-" }}
        </p>
      </div>
      <div>
        <p class="text-xs text-zinc-500">Competitors</p>
        <p class="text-sm text-zinc-300 mt-1">
          {{ competitors }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["competitors", "horse", "distance"]);
</script>
