<template>
  <div class="ui-item-entry field has-addons">
    <div class="control is-expanded">
      <input
        class="input"
        v-model.trim="input"
        :placeholder="placeholder"
        @keydown.enter="onSubmit"
      />
    </div>
    <div class="control" v-if="icon">
      <button
        type="submit"
        class="button is-primary"
        @click="onClickDetailes"
        :disabled="input.length === 0"
      >
        <span class="icon is-small">
          <i :class="`fas fa-${icon}`"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    cardId: [String, Number],
    placeholder: String,
    icon: {
      type: String,
      default: "angle-right",
    },
  },
  data() {
    return {
      input: "",
      detailed: false,
    };
  },
  methods: {
    isNotEmptyInput() {
      return this.input.trim().length > 0;
    },

    onSubmit() {
      if (this.isNotEmptyInput) {
        this.$emit("enter", {
          id: this.cardId,
          text: this.input,
          detailed: this.detailed,
        });
        this.clearData();
      }
    },

    onClickDetailes() {
      this.detailed = true;
      this.onSubmit();
    },

    clearData() {
      this.input = "";
      this.detailed = false;
    },
  },
};
</script>

<style lang="scss">
.ui-item-entry {
  margin: 5px;
}
</style>
