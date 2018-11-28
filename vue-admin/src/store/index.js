import Vue from 'vue'
import Vuex from 'vuex'
// getter
import getter from './getter.js'
// module
import app from './module/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    app
  },
  getter
})

export default store