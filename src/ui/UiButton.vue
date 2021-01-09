<template>
  <div class="control">
    <button type="button" :class="`button is-${type}`" @click="handleClick">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "UiButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
