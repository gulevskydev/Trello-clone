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

    ADD_NEW_TASK: (state, task) => {
      const updateCard = state.cards.find((_, id) => id === task.index);
      console.log(updateCard, task, state.cards);
      updateCard.tasks.push(task);
    },
  },
  getters: {
    CARDS(state) {
      return state.cards;
    },
  },
});

export default store;
