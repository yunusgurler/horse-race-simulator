<script setup>
const props = defineProps({
  status: {
    type: String,
    default: "pending",
  },
});

const getStatusColor = (status) => {
  switch (status) {
    case "finished":
      return "text-green-400";
    case "in-progress":
      return "text-cyan-400";
    default:
      return "text-zinc-500";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "finished":
      return "Finished";
    case "in-progress":
      return "In Progress";
    default:
      return "Pending";
  }
};
</script>

<template>
  <span class="text-xs" :class="getStatusColor(status)">
    {{ getStatusLabel(status) }}
  </span>
</template>
