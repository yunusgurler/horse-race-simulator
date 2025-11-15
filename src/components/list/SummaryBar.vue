<template>
  <div
    class="p-4 border-b border-zinc-800 bg-zinc-900/50"
    style="border-top-left-radius: 10px; border-top-right-radius: 10px"
  >
    <h2 class="text-white">Horse List</h2>
    <p class="text-sm text-white mt-1">{{ horses.length }} horses registered</p>
  </div>
</template>
<script setup>
const props = defineProps(["horses"]);
</script>
