<template>
  <div
    class="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center shadow-lg"
    :style="{
      backgroundColor: props.horse.color,
      borderColor: props.horse.color,
      boxShadow: '0 0 20px ' + horse.color + '80',
    }"
  >
    <img :src="horseIcon" alt="Horcy logo" class="h-8 w-auto sm:h-6" />
  </div>
</template>
<script setup>
import horseIcon from "../../../src/assets/horse-racer.png";
const props = defineProps(["horse"]);
</script>
<style scoped></style>
