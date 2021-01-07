<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from "./components/Wrapper.vue";

export default {
  name: "App",
  components: {
    Wrapper,
  },
};
</script>

<style lang="scss">
body {
  background-color: rgb(0, 121, 191);
}
#app {
  height: 100%;
  width: 100%;
}
</style>
