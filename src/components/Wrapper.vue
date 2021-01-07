<template>
  <div class="wrapper">
    <Header />
    <Board />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Board from "./Board.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Wrapper",
  components: {
    Header,
    Board,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CARDS"]),
  },
  methods: {
    ...mapActions([""]),
  },
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
