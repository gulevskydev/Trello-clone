export function state() {
  return {
    cards: [],
  };
}

export const mutations = {
  cards(state, value) {
    state.cards = value;
  },

  reset(state) {
    console.log("Reset");
    state.cards = [];
  },

  addNewCard(state, value) {
    state.cards.push(value);
  },
};

const getters = {
  getCards(state) {
    return state.cards;
  },
};

export default {
  state,
  mutations,
  getters,
};
