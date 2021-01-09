<template>
  <div id="app">
    <div>
      <h1 class="is-size-3">Tasks</h1>
      <p class="subtitle is-6">
        Add lists and items by typing in the edit boxes. To enter further
        details, CMD or CTRL Enter.
      </p>
    </div>
    <div>
      <board />
    </div>
  </div>
</template>

<script>
import Board from "./components/Board.vue";

export default {
  name: "App",
  components: {
    Board,
  },
};
</script>

<style lang="scss">
// body {
//   background-color: rgb(0, 121, 191);
// }
#app {
  height: 100%;
  width: 100%;
}
</style>
