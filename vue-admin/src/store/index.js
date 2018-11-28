import Vue from 'vue'
import Vuex from 'vuex'
// getter
import getters from './getters.js'
// module
import app from './module/app'
import user from './module/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})

export default store
