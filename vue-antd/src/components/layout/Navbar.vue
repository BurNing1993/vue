<template>
   <div class="navbar">

      <a-dropdown>
        <a-avatar size="large" icon="user" class="avatar"/>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="javascript:;" @click="handleLogoutClick">退出</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
   </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {

  },
  data() {
    return {

    };
  },
  methods: {
    handleLogoutClick() {
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar{
  width: 100%;
  padding:10px 20px;
  display: flex;
  justify-content: flex-end;
  .avatar{
    cursor: pointer;
  }
}
</style>
