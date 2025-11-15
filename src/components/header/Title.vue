<template>
  <div class="flex items-center gap-2">
    <img :src="logo" alt="Horcy logo" class="h-8 w-auto sm:h-9" />

    <h1 class="logo-title text-lg sm:text-xl text-black">Horcy</h1>
  </div>
</template>
<script setup>
import logo from "../../assets/horse-ikon.png";
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 16px;
}
h3 {
  font-family: "Courier New", Courier, monospace;
  margin-left: 8px;
  color: black;
  font-weight: bold;
  font-size: 24px;
}
.logo {
  height: 30px;
  width: 30px;
}
.logo-title {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
}
</style>
