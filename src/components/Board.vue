<template>
  <div class="board-canvas">
    <div class="board-wrapper"></div>
    <div class="add-card" @click="addCardTitle">
      <div v-if="!isClickingOnCard" class="add-card__title">
        + Добавить еще одну колонку
      </div>
      <template v-if="isClickingOnCard">
        <input class="add-card__input" placeholder="Ввести заголовок списка" />
        <div class="add-card__input-wrapper">
          <div class="add-card__button">
            Добавить список
          </div>
          <span class="add-card__close" @click.stop="closeCardAdditing" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  data() {
    return {
      isClickingOnCard: false,
    };
  },
  methods: {
    addCardTitle() {
      this.isClickingOnCard = true;
    },
    closeCardAdditing() {
      this.isClickingOnCard = false;
    },
  },
};
</script>

<style lang="scss">
.board {
  &-canvas {
    position: relative;
    flex-grow: 1;
    margin-top: 30px;
  }

  &-wrapper {
    user-select: none;
    white-space: nowrap;
    margin-bottom: 8px;
    // overflow-x: auto;
    // overflow-y: hidden;
    // padding-bottom: 8px;
    // position: absolute;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
  }
}

.add-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: auto;
  min-height: 36px;
  padding: 8px 4px;
  border-radius: 3px;
  cursor: pointer;
  background-color: hsla(0, 0%, 100%, 0.4);

  &__title {
    color: #ffffff;
    font-weight: 800;
    cursor: pointer;
  }

  &__input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 3px;
    display: block;
    line-height: 20px;
    margin-bottom: 12px;
    padding: 8px 12px;
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #0079bf;
    transition: margin 85ms ease-in, background 85ms ease-in;
  }

  &__button {
    min-height: 36px;
    height: 36px;
    margin-top: 0;
    padding: 8px;
    margin-right: 20px;
    background-color: #5aac44;
    box-shadow: none;
    border: none;
    color: #fff;
  }

  &__input-wrapper {
    display: flex;
  }

  &__close {
    height: 12px;
    width: 12px;
    background-image: url("../images/cancel.svg");
    transition: hover 0.3s;

    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>
