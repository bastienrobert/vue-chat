<template>
  <div class="Home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'Home',
  data: () => ({
    msg: 'Welcome to Your Vue.js App',
  }),
  beforeRouteEnter (to, from, next) {
    Cookies.get('name') ? next() : next({name: 'login'})
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
</style>
