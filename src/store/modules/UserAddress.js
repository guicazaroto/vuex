export default {
  state: {
    address: {
      city: 'Cariacica',
      street: 'Avenida Principal',
      uf: 'ES',
      cep: 29141752
    }
  },
  mutations: {
    'CHANGE USER ADDRESS' (state, payload) {
      state.address = payload
    }
  },
  actions: {
    changeUserAddress (context, payload) {
      context.commit('CHANGE USER ADDRESS', payload)
    }
  },
  getters: {
    getUserAddress (state) {
      return state.address
    }
  }
}
