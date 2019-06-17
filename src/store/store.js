import Vue from 'vue'
import Vuex from 'vuex'
import UserLoginInfo from './modules/UserLoginInfo'
import UserAddress from './modules/UserAddress'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    UserLoginInfo,
    UserAddress
  }
})
