<template>
   <div>
   {{name}}
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'About',
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['name']),
  },
};
</script>

<style lang="scss" scoped>
</style>
