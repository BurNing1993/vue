<template>
  <el-container class="container">
    <sidebar/>
    <el-container>
      <el-header>
        <navbar/>
      </el-header>
      <el-main>Main</el-main>
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
