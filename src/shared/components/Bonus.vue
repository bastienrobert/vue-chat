<template>
  <div>
    <img src="@/assets/images/rocket.svg" :class="$style.rocket" ref="rocket" />
  </div>
</template>

<script>
import Emitter from 'utils/Emitter'
import wizzAudio from '@/assets/sounds/wizz.wav'
import msnAudio from '@/assets/sounds/msn.mp3'

const wizz = new Audio(wizzAudio)
const msn = new Audio(msnAudio)

export default {
  mounted() {
    Emitter.on('rocket', this.rocket)
    Emitter.on('wizz', this.wizz)
    Emitter.on('msn', this.msn)
  },
  destroyed() {
    Emitter.off('rocket', this.rocket)
    Emitter.off('wizz', this.wizz)
    Emitter.off('msn', this.msn)
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
      wizz.play()
    },
    msn() {
      msn.play()
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
