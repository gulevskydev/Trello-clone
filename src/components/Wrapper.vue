<template>
  <div class="wrapper">
    <Header />
    <Cards />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Cards from "./Cards.vue";
export default {
  name: "Wrapper",
  components: {
    Header,
    Cards,
  },
};
</script>

<style></style>
