<template>
  <div class="board-container">
    <div class="board">
      <div class="clear-button">
        <ui-button :disbaled="cards.length === 0" @click="reset"
          >Reset</ui-button
        >
      </div>

      <div class="cards-container">
        <container
          lock-axis="x"
          orientation="horizontal"
          drag-handle-selector=".list-drag-handle"
          @drop="onDropHandler"
        >
          <draggable v-for="(card, index) in cards" :key="card.id">
            <section class="card-container" ref="list" :data-id="card.id">
              <div class="card-header__title">
                <span class="card-drag-handle">&#x2630;</span>
                {{ card.title }}
              </div>
              <container
                group-name="card"
                drag-class="card-ghost"
                drop-class="card-ghost-drop"
                non-drag-area-selector=".icon"
                :animation-duration="100"
                @drop="(e) => onCardDrop(e, card, index)"
              >
                <draggable v-for="item in card.items" :key="item.id">
                  <Task :item="item" @edit="editTask" />
                </draggable>
              </container>

              <div class="input-main">
                <ui-input
                  :card-id="card.id"
                  placeholder="Add an item"
                  icon="ellipsis-h"
                  @enter="onAddNewTask"
                />
              </div>
            </section>
          </draggable>
        </container>

        <div class="new-list">
          <ui-input placeholder="Add a list" @enter="onAddNewCard" />
        </div>
      </div>
    </div>

    <ui-modal ref="modal" :active="modal" :cancellable="1" @close="hideModal">
      <ui-form ref="form" @submit="onAddNewTask" @cancel="hideModal" />
    </ui-modal>
  </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { mapGetters } from "vuex";

import UiButton from "../ui/UiButton.vue";
import UiInput from "../ui/UiInput.vue";
import UiForm from "../ui/UiForm.vue";
import UiModal from "../ui/UiModal.vue";
import Task from "./Task.vue";

import { makeDropHandler } from "../utils";

export default {
  name: "Board",
  components: {
    Container,
    Draggable,
    UiInput,
    UiButton,
    UiForm,
    UiModal,
    Task,
  },

  data: function() {
    return {
      modal: false,
      activeCardsId: null,
    };
  },

  computed: {
    cards() {
      return this.getCards;
    },
    ...mapGetters(["getCards"]),
  },
  methods: {
    reset() {
      this.$store.commit("reset");
    },

    onDropHandler() {
      makeDropHandler("onListDropComplete");
    },

    onCardDrop() {
      makeDropHandler("onCardDropComplete");
    },

    onAddNewTask(data) {
      if (data.detailed === true) {
        this.activeCardId = data.id;
        this.modal = true;
        this.showModal({ title: data.text });
        return;
      }
      this.addItem(data.id, data.text);
    },

    onAddNewCard({ text }) {
      this.$store.commit("addNewCard", { title: text });
      this.$nextTick(() => {
        const cards = this.$refs.list;
        cards[cards.length - 1].querySelector("input").focus();
      });
    },

    editTask(task) {
      this.showModal(task);
    },
    // onAddNewTask(item) {
    //   console.log(item);
    //   item.id
    //     ? this.$store.commit("updateCard", { id: item.id, ...item })
    //     : this.addItem(
    //         this.activeCardId,
    //         item.title,
    //         item.description,
    //         item.date
    //       );
    //   this.hideModal();
    // },

    addItem(cardId, title, description, date) {
      console.log({ cardId, title, description, date });
      this.$store.commit("addTask", { cardId, title, description, date });
    },

    showModal(task) {
      this.modal = true;
      this.$nextTick(() => {
        this.$refs.form.show(task);
      });
    },

    hideModal() {
      // this.focusInput(this.activeCardsId);
      this.modal = false;
    },
  },
};
</script>

<style lang="scss">
$column-width: 320px;

.board {
  margin-top: 20px;
  white-space: nowrap;
  > * {
    display: inline-block;
  }
  .new-list {
    margin-top: 10px;
  }
}
.clear-button {
  position: absolute;
  top: 20px;
  right: 20px;
}

.card-container {
  width: $column-width;
  padding: 10px;
  margin: 5px;
  margin-right: 20px;
  background-color: #f3f3f3;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
}
.cards-container {
  > * {
    display: inline-block;
    vertical-align: top;
  }
}

.card {
  margin: 5px;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
  padding: 10px;
}
.card-ghost {
  transition: 0.25s all;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  transform: scale(1.1);
}
.card-ghost-drop {
  transform: scale(1);
}
.card-header__title {
  display: flex;
  align-items: center;
  box-shadow: none;
  font-size: 18px;
}
.smooth-dnd-container {
  min-height: 0px;
}

.card-drag-handle {
  cursor: pointer;
  padding: 5px;
}
.input-main {
  padding-top: 10px;
  margin-top: 10px;
  border-top: 1px solid #ddd;
}
.new-list {
  width: $column-width;
  margin-left: -10px;
}
</style>
