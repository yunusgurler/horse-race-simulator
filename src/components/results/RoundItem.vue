<script setup>
import StatusBadge from "./StatusBadge.vue";
import ResultRow from "./ResultRow.vue";

const props = defineProps({
  round: {
    type: Object,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["toggle"]);
</script>

<template>
  <div>
    <!-- Trigger -->
    <button type="button" class="w-full" @click="emit('toggle')">
      <div
        class="p-4 flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
      >
        <div class="flex items-center gap-3">
          <div
            class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center"
          >
            <span class="text-sm text-purple-400">
              {{ round.id }}
            </span>
          </div>
          <div class="text-left">
            <div class="flex items-center gap-2">
              <span class="text-sm">
                {{ round.title }}
              </span>
              <StatusBadge :status="round.status" />
            </div>
          </div>
        </div>
      </div>
    </button>

    <!-- Content -->
    <transition name="collapsible">
      <div v-if="isOpen">
        <div
          v-if="round.horses && round.horses.length > 0"
          class="border-t border-zinc-800"
        >
          <div class="divide-y divide-zinc-800/50">
            <ResultRow
              v-for="result in round.horses"
              :key="result.id ?? result.rank"
              :result="result"
            />
          </div>
        </div>

        <div v-else class="p-6 text-center border-t border-zinc-800">
          <p class="text-sm text-zinc-500">
            {{
              round.status === "in-progress"
                ? "Race in progress..."
                : "Awaiting race start"
            }}
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>
