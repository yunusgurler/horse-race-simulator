<script setup>
const props = defineProps({
  result: {
    type: Object,
    required: true,
  },
});

function msToSecond(ms) {
  if (!ms) return;
  const second = ms / 1000;
  return second + " second" || "";
}
</script>

<template>
  <div
    class="flex items-center gap-3 p-3 hover:bg-zinc-800/30 transition-colors"
  >
    <div class="w-6 flex items-center justify-center">
      <span class="text-zinc-500 text-sm">
        {{ result.rank }}
      </span>
    </div>

    <div
      class="w-2.5 h-2.5 rounded-full shrink-0"
      :style="{ backgroundColor: result.color }"
    />
    <span class="text-sm text-zinc-300 flex-1">
      {{ result.name }}
    </span>
  <!--   <span class="text-xs text-primary font-mono">
      {{ result.time ?? msToSecond(result.timeMs) ?? "-" }}
    </span> -->
  </div>
</template>
