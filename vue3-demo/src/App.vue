<template>
  <div class="container text-center mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"/>
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
</style>