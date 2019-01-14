<template>
  <v-app>
    <router-link to="about">about</router-link>
    <router-link to="/">home</router-link>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>
