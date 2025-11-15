<template>
  <div class="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
    <div
      class="w-2 h-2 rounded-full"
      :style="{ backgroundColor: horse.color }"
    />
    <span class="text-[10px] sm:text-xs text-zinc-500">
      Lane {{ index + 1 }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps(['index', 'horse'])

</script>