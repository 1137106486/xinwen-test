<template>
  <div id="app">
    <router-view >
      <index/>
    </router-view>
  </div>
</template>
<script>
import index from "./components/index.vue";
export default {
  name: "App",
  components: {
    index
  }
};
</script>

<style >
</style>
