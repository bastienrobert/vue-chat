<template>
  <div :class="$style.TopBar">
    <h1>Galaxie BDDI</h1>
    <div :class="$style.CrossIcon">
      <CrossIcon @click="disconnect" />
    </div>
  </div>
</template>

<script>
import { Cross as CrossIcon } from 'icons'

export default {
  components: {
    CrossIcon
  },
  methods: {
    disconnect() {
      this.$emit('disconnect')
    }
  }
}
</script>

<style lang="scss" scoped module>
.TopBar {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: $dark;
  align-items: center;
  justify-content: center;

  h1 {
    color: $pink;
    background: linear-gradient(90deg, $blue, $pink);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-size: .8em;
    font-family: 'Montserrat';
    font-weight: 600;
  }

  .CrossIcon {
    position: absolute;
    right: 30px;
  }
}
</style>
