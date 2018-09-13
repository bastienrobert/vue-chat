<template>
  <div :class="$style.Cross" @click="onClick">
    <span :class="$style.rotateTop" />
    <span :class="$style.rotateBtm" />
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped module>
.Cross {
  position: relative;
  width: 10px;
  height: 10px;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    display: block;
    height: 2px;
    width: 100%;
    background-color: $white;
    backface-visibility: hidden;
  }

  .rotateTop {
    transform: translateY(5px) rotate(45deg);
  }

  .rotateBtm {
    transform: translateY(5px) rotate(-45deg);
  }
}
</style>
