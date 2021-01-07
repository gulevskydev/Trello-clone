<template>
  <div class="cards-container">
    <div v-for="(card, index) of CARDS" class="card" :key="card.id">
      <h2 v-if="index === 0">
        {{ card.title }}
      </h2>

      <div v-if="card.label.length" class="card__body">
        <h3>{{ card.label }}</h3>
      </div>
    </div>

    <div class="add-label__wrapper">
      <input
        type="text"
        placeholder="Ввести заголовок для этой карточки"
        class="add-label__input"
      />
      <div class="add-card__input-wrapper">
        <div class="add-card__button" @click="addNewCard">
          Добавить список
        </div>
        <span class="add-card__close" @click.stop="closeCardAdditing" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cards",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CARDS"]),
  },
};
</script>

<style lang="scss">
.card {
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  width: 270px;
  padding: 20px;
  position: relative;
  white-space: normal;
}
</style>
