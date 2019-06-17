<template>
  <div>
    <div class='container py-5'>
      <ul>
        <li><router-link to='/user-update'>Update user</router-link></li>
        <li><router-link to='address-update'>Address Update</router-link></li>
      </ul>
      <div class='jumbotron'>
        <h4>Informações de usuário</h4>
        <ul>
          <li>{{getUser.name}}</li>
          <li>{{getUser.email}}</li>
        </ul>
        <hr>
        <h4>Endereço</h4>
        <ul>
          <li>{{getUserAddress.city}}</li>
          <li>{{getUserAddress.street}}</li>
          <li>{{getUserAddress.uf}}</li>
          <li>{{getUserAddress.cep}}</li>
        </ul>
      </div>
      <br>
    </div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  data () {
    return {
      title: 'Users data'
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getUserAddress'
    ])
  }
}
</script>

<style scoped>
</style>
