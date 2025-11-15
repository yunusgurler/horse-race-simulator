<template>
  <div
    v-for="(horse, index) in horses"
    :key="horse.id + '-' + index"
    class="p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 transition-colors border border-zinc-700/50"
  >
    <div class="flex items-center gap-3 mb-2">
      <div
        class="w-3 h-3 rounded-full shrink-0 ring-2 ring-zinc-700"
        :style="{ backgroundColor: horse.color }"
      />
      <span class="text-sm text-zinc-300">
        {{ horse.name }}
      </span>
    </div>

    <div class="space-y-1">
      <div class="flex items-center justify-between text-xs">
        <span class="text-zinc-500">Condition</span>
        <span style="color: #ffe100"> {{ horse.condition }}% </span>
      </div>

      <div class="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
        <div
          class="h-full bg-primary"
          :style="{ width: horse.condition + '%' }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["horses"]);
</script>
