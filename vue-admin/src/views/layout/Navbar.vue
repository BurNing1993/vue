<template>
  <div>
    <el-button size="mini" @click="handleClick">
      <font-awesome-icon icon="bars" class="fa-lg icon"/>
    </el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(['toggleSideBar']),
    handleClick() {
      this.toggleSideBar()
    }
  }
}
</script>

<style scoped>
</style>
