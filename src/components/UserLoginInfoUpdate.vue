<template>
  <div class="container py-5">
    <ul>
      <router-link to='/'>Home</router-link>
    </ul>
    <div class="jumbotron">
      <h3>Update user data</h3>
      <form class="form">
        <div class="form-group">
          <label>Nome</label>
          <input type="text" class="form-control"  v-model="userName">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="userEmail" >
        </div>
        <button @click.stop="changeUserData({name: userName, email: userEmail})" type="button" class="btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    const userGetterObj = this.$store.getters['getUser']
    return {
      userName: userGetterObj.name,
      userEmail: userGetterObj.email
    }
  },
  methods: {
    ...mapActions([
      'changeUserData'
    ])
  },
  computed: {
    ...mapGetters([
      'getUser'
    ])
  }
}
</script>

<style>

</style>
