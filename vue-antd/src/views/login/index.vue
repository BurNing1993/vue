<template>
  <a-row type="flex"  align="middle" class="login">
    <a-col :xs="1" :sm="4" :md="6" :lg="8" :xl="9"/>
    <a-col :xs="22" :sm="16" :md="12" :lg="8" :xl="6">
      <a-card title="LOGIN">
        <a href="#" slot="extra">more</a>
        <login-form/>
      </a-card>
    </a-col>
    <a-col :xs="1" :sm="4" :md="6" :lg="8" :xl="9"/>
  </a-row>
</template>

<script>
import LoginForm from './LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
}
</style>
