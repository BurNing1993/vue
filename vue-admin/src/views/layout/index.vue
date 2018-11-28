<template>
  <el-container class="container"> 
    <navbar/>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: "Layout",
  components:{
    Navbar
  },
  data() {
    return {
      isCollapse: true,
      menuStyle: {
        // height: 6500px
      }
    };
  },


};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.container{
   min-height: calc(100vh - 24px);
}
.menu{
   min-height: calc(100vh - 24px);
}
</style>
