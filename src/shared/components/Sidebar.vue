<template>
  <div :class="$style.Sidebar">
    <Bonus />
    <div :class="$style.background">
      <div :class="$style.stars" ref="stars" />
      <div :class="$style.planetSmall" ref="small" />
      <div :class="$style.planetLarge" ref="large" />
    </div>
    <UsersList />
  </div>
</template>

<script>
import values from 'values'

import UsersList from './UsersList'
import Parallax from './Parallax'
import Bonus from './Bonus'

export default {
  components: {
    UsersList,
    Parallax,
    Bonus
  },
  mounted() {
    this.init()
  },
  destroyed() {
    window.cancelAnimationFrame(this.raf)
  },
  methods: {
    init() {
      this.animate()
    },
    animate() {
      this.$refs.stars.style.transform = `translate(${values.mouse.x * 0.01}px, ${values.mouse.y * 0.01}px)`
      this.$refs.small.style.transform = `translate(${values.mouse.x * 0.015}px, ${values.mouse.y * 0.015}px)`
      this.$refs.large.style.transform = `translate(${values.mouse.x * 0.018}px, ${values.mouse.y * 0.018}px)`

      this.raf = window.requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style lang="scss" scoped module>
.Sidebar {
  position: relative;
  height: 100%;
  overflow: hidden;
  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    .stars {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: url("@/assets/images/sidebar.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    .planetSmall {
      position: absolute;
      top: 30%;
      right: -40px;
      width: 120px;
      height: 120px;
      background-image: url("@/assets/images/parallax/planet1.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    .planetLarge {
      position: absolute;
      top: -15px;
      left: 15%;
      width: 120px;
      height: 120px;
      background-image: url("@/assets/images/parallax/planet3.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
