import {
  // getItemById,
  getListById,
  // getListByItemId,
  makeItem,
  makeList,
} from "../utils";

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
    state.cards = [];
  },

  addNewCard(state, { title }) {
    state.cards.push(makeList(title));
  },

  updateCard(state, value) {
    state.cards = state.cards.map((card) =>
      card.id === value.id ? value : card
    );
  },

  addTask(state, { cardId, title, description, date }) {
    console.log({ cardId, title, description, date }, "data");
    const updatedCard = getListById(state.cards, cardId);
    console.log(state.cards, "cards");
    updatedCard.items.push(makeItem(title, description, date));
  },
};

const getters = {
  getCards(state) {
    return state.cards;
  },

  getListById,
};

export default {
  state,
  mutations,
  getters,
};
