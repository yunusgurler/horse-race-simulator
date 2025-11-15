<template>
  <div
    class="absolute top-1/2 -translate-y-1/2 transition-all duration-150 ease-linear"
    :style="{
      left: (isMobile ? horse.place - 2 : horse.place - 10) + '%',
    }"
  >
    <HorseIcon :horse="horse" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import HorseIcon from "./HorseIcon.vue";

const { horse } = defineProps(["horse"]);

const isMobile = ref(false);

function updateIsMobile() {
  isMobile.value = window.innerWidth < 1050;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateIsMobile);
});
</script>
