import { createRandomHorses } from "@/utils/horseGenerator";
import { createSchedule } from "@/utils/scheduleGenerator";
import { handleStartRaces } from "@/utils/raceHandler";

export default {
  namespaced: true,

  state: () => ({
    horses: [],
    schedule: [],
    loading: false,
    horsesLoaded: false,
    timerForRounds: [],
    activeRoundId: null,
  }),

  getters: {
    getHorses(state) {
      return state.horses;
    },
    getSchedule(state) {
      return state.schedule;
    },
    isLoading(state) {
      return state.loading;
    },
    isHorsesLoaded(state) {
      return state.horsesLoaded;
    },
    getActiveRoundId(state) {
      return state.activeRoundId;
    },
    getRoundWithRoundId: (state) => (roundId) => {
      const round = state.schedule.find((r) => r.id === roundId);
      return round || null;
    },
    getHorseWithRoundAndHorseId: (state) => (roundId, horseId) => {
      if (!roundId && !horseId) return;
      const round = state.schedule.find((r) => r.id === roundId);
      const horse = round.horses.find((h) => h.id === horseId);
      return horse;
    },
  },

  mutations: {
    setHorses(state, value) {
      state.horses = value;
    },
    setSchedule(state, value) {
      state.schedule = value;
    },
    setLoading(state, value) {
      state.loading = value;
    },
    setHorsesLoaded(state, value) {
      state.horsesLoaded = value;
    },
    setActiveRoundId(state, value) {
      state.activeRoundId = value;
    },
    setTimerForRounds(state, value) {
      state.timerForRounds = value;
    },
    updateScheduleRound(state, { roundId, patch }) {
      const idx = state.schedule.findIndex((r) => r.id === roundId);
      if (idx === -1) return;

      state.schedule[idx] = {
        ...state.schedule[idx],
        ...patch,
      };
    },
  },

  actions: {
    generateHorses({ commit }) {
      commit("setLoading", true);
      commit("setHorsesLoaded", false);

      const horses = createRandomHorses();
      commit("setHorses", horses);

      commit("setLoading", false);
      commit("setHorsesLoaded", true);
    },

    generateSchedule({ state, commit }) {
      commit("setLoading", true);

      const schedule = createSchedule(state.horses);
      commit("setSchedule", schedule);

      commit("setLoading", false);
    },

    async startRaces({ state, commit }) {
      if (!state.schedule.length) return;

      commit("setLoading", true);

      await handleStartRaces({
        schedule: state.schedule,

        onRoundStart: (roundId) => {
          commit("setActiveRoundId", roundId);
          commit("updateScheduleRound", {
            roundId,
            patch: { status: "in-progress" },
          });
        },

        onRoundFinish: (roundId, elapsedMs, placement) => {
          commit("updateScheduleRound", {
            roundId,
            patch: {
              status: "finished",
              isFinished: true,
              elapsedMs,
              horses: placement,
            },
          });
        },
      });

      commit("setLoading", false);
    },

    updateScheduleRound({ commit }, { roundId, patch }) {
      commit("updateScheduleRound", { roundId, patch });
    },
  },
};
