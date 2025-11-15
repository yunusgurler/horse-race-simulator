<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 border-b border-primary bg-primary backdrop-blur-sm"
  >
    <div
      class="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3"
    >
      <Title></Title>

      <Buttons></Buttons>
    </div>
  </header>
</template>

<script setup>
import Buttons from "./header/Buttons.vue";
import Title from "./header/Title.vue";
</script>

<style scoped>
</style>
