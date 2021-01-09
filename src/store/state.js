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

  updateCard(state, value) {
    state.cards = state.cards.map((card) =>
      card.id === value.id ? value : card
    );
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
