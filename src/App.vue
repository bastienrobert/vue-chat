<template>
  <div id="app">
    <transition name="flash">
      <router-view/>
    </transition>
    <!-- <Flash /> -->
  </div>
</template>

<script>
import Flash from 'components/flash'

export default {
  name: 'App',
  components: {
    Flash
  }
}
</script>

<style lang="scss">
@import "~reset-css";
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

#app {
  font-family: sans-serif;
  font-size: 16px;
  background-color: $darkGrey;
}
</style>
