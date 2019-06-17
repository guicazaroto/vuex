<template>
  <div class="container py-5">
    <ul>
      <router-link to='/'>Home</router-link>
    </ul>
    <div class="jumbotron">
      <h3>Update user Adress</h3>
      <form class="form">
        <div class="form-group">
          <label>City</label>
          <input type="text" class="form-control"  v-model="userCity">
        </div>
        <div class="form-group">
          <label>Street</label>
          <input type="text" class="form-control" v-model="userStreet" >
        </div>
        <div class="form-group">
          <label>UF</label>
          <input type="text" class="form-control" v-model="userUF" >
        </div>
        <div class="form-group">
          <label>CEP</label>
          <input type="text" class="form-control" v-model="userCEP" >
        </div>
        <button @click.stop="changeUserAddress({city: userCity, street: userStreet, uf: userUF, cep: userCEP })"
                type="button"
                class="btn btn-primary">
                Update
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    const userAddress = this.$store.getters['getUserAddress']
    return {
      userCity: userAddress.city,
      userStreet: userAddress.street,
      userUF: userAddress.uf,
      userCEP: userAddress.cep
    }
  },
  methods: {
    ...mapActions(['changeUserAddress'])
  }
}
</script>
