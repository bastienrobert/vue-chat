<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
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

// .slide-fade-enter-active {
//   animation: slide-fade .6s;
// }

// .slide-fade-leave-active {
//   animation: slide-fade .6s reverse;
// }

@keyframes slide-fade {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  30% {
    transform: translateY(70px);
    opacity: .8;
  }
  60% {
    transform: translateY(40px);
    opacity: .3;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
