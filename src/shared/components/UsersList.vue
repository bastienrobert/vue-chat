<template>
  <div :class="$style.UsersList">
    <!-- <img src="@/assets/images/rocket.svg" :class="$style.rocket" /> -->
    <h2>Astro<br>nautes</h2>
    <div v-for="user in users">
      <User :user="user" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import User from './User'

export default {
  components: {
    User
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  }
}
</script>

<style lang="scss" scoped module>
.UsersList {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  margin: 0 auto;
  text-align: center;
  h2 {
    color: $white;
    text-transform: uppercase;
    font-size: 1.4em;
  }
  .rocket {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
}
</style>
