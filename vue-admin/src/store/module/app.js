const App = {
  state: {
    isCollapse: true
  },
  mutations: {
    SET_IS_COLLAPSE: state => {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('SET_IS_COLLAPSE')
    }
  }
}
export default App
