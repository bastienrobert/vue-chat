<template>
  <div :class="composed">
    <!-- <canvas ref="canvas" :class="$style.canvas" /> -->
  </div>
</template>

<script>
import classnames from 'classnames'

export default {
  props: ['className'],
  mounted() {
    // this.init()
  },
  computed: {
    composed() {
      return classnames(this.$style.Parallax, this.className)
    }
  },
  /* methods: {
    init() {
      this.width = window.innerWidth
      this.height = window.innerHeight

      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')

      this.stars = Array.apply(null, Array(1200)).map((_, i) => i).map(i => this.generateStar(1, 1))
      this.closerStars = Array.apply(null, Array(1200)).map((_, i) => i).map(i => this.generateStar(2, 1.5))
      this.closestStars = Array.apply(null, Array(300)).map((_, i) => i).map(i => this.generateStar(4, 2.25))

      this.animate()
    },
    generateStar(size, speed) {
      let x = Math.random() > 0.5 ? Math.random() * this.width * 2 * speed : Math.random() * this.width * 2 * speed * -1
      let y = Math.random() > 0.5 ? Math.random() * this.height * 2 * speed : Math.random() * this.height * 2 * speed * -1
      return {
        x,
        y,
        draw: () => {
          x += .05 * speed
          y -= .3 * speed
          this.ctx.fillStyle = 'white'
          this.ctx.fillRect(x, y, size, size)
        }
      }
    },
    animate() {
      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(0, 0, this.width, this.height)
      this.stars.forEach(star => star.draw())
      this.closerStars.forEach(star => star.draw())
      this.closestStars.forEach(star => star.draw())
      requestAnimationFrame(this.animate)
    }
  } */
}
</script>

<style lang="scss" scoped module>
.Parallax {
  background-color: $darkGrey;
  .canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
