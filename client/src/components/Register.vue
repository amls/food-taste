<template>

<div>
  <h1>Register for free!</h1>

  <input 
  type="email" 
  name="email"
  v-model= "email"
  placeholder="email"/>
  <br>
  <input 
  type="password" 
  name="password"
  v-model= "password"
  placeholder="password"/>
  <br>
  <button
    @click="register">
    Register
  </button>
</div>

</template>

<script>
import AuthenticationServer from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: ' ',
      password: ' '
    }
  },
  watch: {
    email(value) {
      console.log('email has changed', value)
    }
  },
  methods:{
    async register(){
      const response = await AuthenticationServer.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
      //console.log('register button was clicked!!!',this.email, this.password)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
