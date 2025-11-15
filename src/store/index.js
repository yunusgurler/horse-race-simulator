import { createStore } from "vuex";
import horses from "./modules/horses";

const store = createStore({
  modules: {
    horses,
  },
});

export default store;
