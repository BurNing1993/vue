<template>
  <section>
    <v-toolbar flat class="hidden-lg-and-up">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>apps</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="title">Application</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile v-for="item in items" :key="item.text" :to="item.to">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </section>
</template>

<script>
export default {
  name: 'Menu',
  components: {},
  data() {
    return {
      items: [
        { icon: 'trending_up', text: 'Most Popular3', to: '/dashboard' },
        { icon: 'trending_up', text: 'Most Popular13', to: '/page1' },
        { icon: 'trending_up', text: 'Most Popular413', to: '/page2' },
      ],
    };
  },
  methods: {
    handleClick() {
      console.log(this.$routes);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
