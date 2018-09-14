<template>
  <div>
    <img src="@/assets/images/rocket.svg" :class="$style.rocket" ref="rocket" />
    <audio src="@/assets/sounds/msn.mp3" ref="msn" />
  </div>
</template>

<script>
import Emitter from 'utils/Emitter'

export default {
  mounted() {
    Emitter.on('rocket', this.rocket)
    Emitter.on('wizz', this.wizz)
  },
  destroyed() {
    Emitter.off('rocket', this.rocket)
    Emitter.off('wizz', this.wizz)
  },
  methods: {
    rocket() {
      this.$refs.rocket.style.transition = 'transform 3s'
      this.$refs.rocket.style.transform = 'translate(-50%, -240vw)'
      setTimeout(() => {
        this.$refs.rocket.style.transition = 'transform 0s'
        this.$refs.rocket.style.transform = 'translate(-50%, 0)'
      }, 3000)
    },
    wizz() {
      this.$refs.msn.play()
    }
  }
}
</script>

<style lang="scss" scoped module>
.rocket {
  position: fixed;
  height: 500px;
  width: auto;
  top: 110%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
