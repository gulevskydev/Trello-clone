<template>
  <div class="field">
    <label v-if="label" class="label">{{ label }}</label>
    <div class="control">
      <textarea
        v-if="type === 'textarea'"
        :name="name"
        class="textarea"
        :class="{ 'is-danger': error }"
        v-model.trim="input"
        v-bind="$attrs"
      ></textarea>
      <input
        v-else
        :type="type"
        :name="name"
        class="input"
        :class="{ 'is-danger': error }"
        v-model.trim="input"
        v-bind="$attrs"
        @keydown.enter="onEnter"
      />
    </div>
    <p v-if="error" class="help is-danger">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "UiModalInput",
  props: {
    name: String,
    value: String,
    label: String,
    error: String,
    type: {
      type: [String, Number],
      default: "text",
    },
  },

  computed: {
    input: {
      get() {
        return this.value;
      },

      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    onEnter($event) {
      this.$emit("enter", $event);
    },
  },
};
</script>

<style lang="scss"></style>
