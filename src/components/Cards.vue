<template>
  <div class="cards-container">
    <div v-for="card in CARDS" class="card" :key="card.id">
      {{ card.title }}
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

<style></style>
