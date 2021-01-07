import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    cards: [],
  },
  mutations: {
    CREATE_CARD: (state, card) => {
      state.cards.push(card);
    },
  },
  actions: {},
  getters: {
    CARDS(state) {
      return state.cards;
    },
  },
});

export default store;
