<template>
  <div class="query-form card">
    <div class="card-content">
      <h2 class="title">New task</h2>
      <ui-input name="title" label="Title" v-model="title" @enter="validate" />
      <ui-input
        name="description"
        type="textarea"
        label="Description"
        v-model="description"
      />
      <ui-input
        name="date"
        type="date"
        label="Date"
        v-model="date"
        @enter="validate"
      />
      <div class="field is-grouped">
        <ui-button type="primary" @click="submit">{{
          id ? "Update" : "Add"
        }}</ui-button>
        <ui-button type="text" @click="cancel">Cancel</ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from "./UiButton.vue";
import UiInput from "./UiModalInput.vue";

export default {
  name: "UiForm",
  components: {
    UiButton,
    UiInput,
  },

  data() {
    return {
      id: null,
      title: "",
      description: "",
      date: null,
      message: "",
    };
  },

  computed: {
    values() {
      return this.$data;
    },
  },

  methods: {
    show(data) {
      Object.assign(this, data);
      this.$el.querySelector("input").focus();
    },

    validate() {
      if (!this.title) {
        alert("Please create a title :)");
      }
    },

    submit() {
      if (this.validate) {
        this.$emit("submit", this.values);
        this.reset();
      }
    },

    cancel() {
      this.$emit("cancel", this.values);
      this.reset();
    },

    reset() {
      this.title = "";
      this.description = "";
      this.date = null;
      this.message = "";
    },
  },
};
</script>

<style></style>
