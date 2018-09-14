<template>
  <div :class="composed">
    <div :class="$style.stars">
      <div v-for="i in 3" :key="i" ref="stars" />
    </div>
    <div :class="$style.planets">
      <div v-for="i in 3" :key="i" ref="planets" />
    </div>
  </div>
</template>

<script>
import classnames from 'classnames'
import values from 'values'

export default {
  props: ['className'],
  mounted() {
    this.init()
  },
  computed: {
    composed() {
      return classnames(this.$style.Parallax, this.className)
    }
  },
  destroyed() {
    window.cancelAnimationFrame(this.raf)
  },
  methods: {
    init() {
      this.animate()
    },
    animate() {
      this.$refs.stars[0].style.transform = `translate(${values.mouse.x * 0.1}px, ${values.mouse.y * 0.1}px)`
      this.$refs.stars[1].style.transform = `translate(${values.mouse.x * 0.05}px, ${values.mouse.y * 0.05}px)`
      this.$refs.stars[2].style.transform = `translate(${values.mouse.x * 0.02}px, ${values.mouse.y * 0.02}px)`

      this.$refs.planets[0].style.transform = `translate(${values.mouse.x * 0.1}px, ${values.mouse.y * 0.08}px)`
      this.$refs.planets[1].style.transform = `translate(${values.mouse.x * 0.05}px, ${values.mouse.y * 0.06}px)`
      this.$refs.planets[2].style.transform = `translate(${values.mouse.x * 0.02}px, ${values.mouse.y * 0.01}px)`

      this.raf = window.requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style lang="scss" scoped module>
.Parallax {
  background-color: $darkGrey;
  .stars {
    div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      &:nth-child(1) {
        background-image: url("@/assets/images/parallax/big-stars.svg");
      }
      &:nth-child(2) {
        background-image: url("@/assets/images/parallax/middle-stars.svg");
      }
      &:nth-child(3) {
        background-image: url("@/assets/images/parallax/small-stars.svg");
      }
    }
  }
  .planets {
    div {
      position: fixed;
      background-size: contain;
      background-repeat: no-repeat;
      &:nth-child(1) {
        top: 30%;
        right: -70px;
        width: 220px;
        height: 220px;
        background-image: url("@/assets/images/parallax/planet1.svg");
      }
      &:nth-child(2) {
        top: 20%;
        left: -60px;
        width: 140px;
        height: 140px;
        background-image: url("@/assets/images/parallax/planet2.svg");
      }
      &:nth-child(3) {
        top: 60%;
        left: 50%;
        width: 280px;
        height: 280px;
        background-image: url("@/assets/images/parallax/planet3.svg");
      }
    }
  }
}
</style>
