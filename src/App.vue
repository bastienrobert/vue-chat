<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import "~reset-css";
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600');

#app {
  font-family: sans-serif;
  font-size: 16px;
}
</style>
