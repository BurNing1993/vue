<template>
  <el-container class="container">
    <sidebar/>
    <el-container>
      <el-header>
        <navbar/>
      </el-header>
      <el-main>
        <font-awesome-icon :icon="['fas', 'coffee']"/>
        <font-awesome-icon :icon="['fab', '500px']"/>
        <font-awesome-icon :icon="['fab', 'adn']"/>
        <font-awesome-icon :icon="['fas', 'adn']"/>
        <font-awesome-icon :icon="['far', 'square']"/>
        <font-awesome-icon :icon="['fab', 'accessible-icon']"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'
import Navbar from './Navbar.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
}
</style>
