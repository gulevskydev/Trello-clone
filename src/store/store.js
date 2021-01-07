import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {},
  actions: {},
  getters: {
    CARDS(state) {
      return state.cards;
    },
  },
});

export default store;
