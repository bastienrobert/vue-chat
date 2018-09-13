<template>
  <div :class="composed" />
</template>

<script>
import classnames from 'classnames'

export default {
  props: ['className'],
  computed: {
    composed() {
      return classnames(this.$style.Parallax, this.className)
    }
  }
}
</script>

<style lang="scss" scoped module>
.Parallax {
  background-color: #242424;
}
</style>
