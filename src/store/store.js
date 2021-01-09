import Vue from "vue";
import Vuex from "vuex";
import persisted from "vuex-persistedstate";
import state from "./state";

Vue.use(Vuex);

let store = new Vuex.Store({
  plugins: [persisted()],
  modules: {
    state,
  },
});

export default store;
