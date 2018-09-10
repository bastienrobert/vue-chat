<template>
  <div class="Login">
    <Hello />
    <input type="text" placeholder="Your name" v-model="login" />
    <button @click="connect">Submit</button>
  </div>
</template>

<script>
import router from 'router'
import Cookies from 'js-cookie'

import Hello from 'components/Hello'

export default {
  components: {
    Hello
  },
  data: () => ({
    login: null
  }),
  methods: {
    connect: function() {
      Cookies.set('name', this.login)
      router.push({name: 'root'})
    }
  }
}
</script>

<style lang="scss" scoped>
.Form {

}
</style>
