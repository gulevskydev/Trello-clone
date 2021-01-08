<template>
  <div class="cards-container">
    <div v-for="(card, index) of CARDS" class="card" :key="card.id">
      <h2>
        {{ card.title }}
      </h2>

      <div v-if="card.label.length" class="card__body">
        <h3>{{ card.label }}</h3>
      </div>

      <div class="task" v-for="task of card.tasks" :key="task.id">
        {{ task["task-title"] }}
      </div>

      <p
        v-if="!isEditing || editingCardIndex !== index"
        class="add-task"
        @click="handleEditing(index)"
      >
        + Добавить еще одну карточку
      </p>
      <div
        v-if="editingCardIndex === index && isEditing"
        class="add-label__wrapper"
      >
        <textarea
          ref="task"
          type="text"
          placeholder="Ввести заголовок для этой карточки"
          class="add-label__input"
          v-model="taskTitle"
        />
        <div class="add-card__input-wrapper">
          <div class="add-card__button _label-btn" @click="addNewTask(index)">
            Добавить список
          </div>
          <span class="add-card__close" @click.stop="finishedEditing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { uuid } from "../utils";

export default {
  name: "Cards",

  data() {
    return {
      isEditing: false,
      editingCardIndex: null,
      taskTitle: "",
    };
  },

  computed: {
    ...mapGetters(["CARDS"]),
  },

  methods: {
    ...mapActions([""]),

    handleEditing(index) {
      this.taskTitle = "";
      this.isEditing = true;
      this.editingCardIndex = index;
      this.$nextTick(() => this.$refs.task.focus());
    },

    finishedEditing() {
      this.isEditing = false;
      this.editingCardIndex = null;
    },

    addNewTask(index) {
      this.$store.commit("ADD_NEW_TASK", {
        "task-title": this.taskTitle,
        index,
        id: uuid(),
      });
    },

    clearSateAfterAddedNewTask() {
      this.taskTitle = "";
      this.editingCardIndex = null;
      this.isEditing = false;
    },
  },
};
</script>

<style lang="scss">
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 100%;
  width: 270px;
  padding: 20px;
  margin-right: 40px;
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  white-space: normal;
}

.cards-container {
  display: flex;
  align-items: baseline;
}

.add-task {
  position: relative;
  display: block;
  margin: 20px 0 8px 0;
  padding: 4px 8px;
  border-radius: 3px;
  color: #5e6c84;
  font-size: 14px;
  text-decoration: none;
  user-select: none;

  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }
}

.add-label {
  &__input {
    width: 90%;
    overflow: hidden;
    overflow-wrap: break-word;
    resize: none;
    height: 60px;
    margin-bottom: 10px;
    margin-top: 20px;
  }
}

._label-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
}
</style>
