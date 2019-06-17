import Vue from 'vue'
import Router from 'vue-router'
import UserInfo from '@/components/UserInfo'
import UserUpdate from '@/components/UserLoginInfoUpdate'
import AddressUpadate from '@/components/UserAddressUpdate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/user-update',
      name: 'User Update',
      component: UserUpdate
    },
    {
      path: '/address-update',
      name: 'Address update',
      component: AddressUpadate
    }
  ]
})
