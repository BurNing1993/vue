<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4 xl3 offset-xl4>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="loginForm.name"
            :counter="10"
            :rules="nameRules"
            label="姓名"
            required/>
          <v-text-field
            v-model="loginForm.passwd"
            :rules="passwdRules"
            label="密码"
            required/>

          <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>

          <v-btn color="error" @click="reset">Reset Form</v-btn>

          <v-btn color="info" small>修改</v-btn>
        <v-btn color="error" large>刪除</v-btn>

    <v-btn color="info" small>修改</v-btn>
        <v-btn color="error" large>刪除</v-btn>
          <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data: () => ({
    valid: true,
    loginForm: {
      name: '',
      passwd: '',
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    passwdRules: [
      v => !!v || 'passwd is required',
      v => (v && v.length <= 10) || 'passwd must be less than 10 characters',
    ],
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
