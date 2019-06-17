export default {
  state: {
    user: {
      name: 'Guilherme Cazaroto',
      cpf: '142.955.337-50',
      email: 'gui.cazaroto@gmail.com'
    }
  },
  mutations: {
    'CHANGE USER DATA' (state, payload) {
      state.user = payload
    }
  },
  actions: {
    changeUserData (context, newUserData) {
      context.commit('CHANGE USER DATA', newUserData)
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  }
}
