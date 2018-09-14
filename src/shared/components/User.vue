<template>
  <div :class="$style.User">
    <img :src="avatar" />
    <span :class="className">{{ user.username }}</span>
  </div>
</template>

<script>
import { avatars } from 'config'

export default {
  props: ['user', 'index'],
  computed: {
    avatar() {
      return avatars[this.user.avatar]
    },
    className() {
      return this.index % 2 ? this.$style.blue : this.$style.pink
    }
  }
}
</script>

<style lang="scss" scoped module>
.User {
  display: flex;
  text-align: left;
  padding: 0 12%;
  margin: .5em 0;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  span {
    color: $white;
    text-transform: capitalize;
    text-transform: uppercase;
    margin-left: 1em;
    font-size: .9em;
    font-family: 'Montserrat';
    &.blue {
      color: $blue;
      font-weight: 600;
    }
    &.pink {
      color: $pink;
      font-weight: 600;
    }
  }
}
</style>
