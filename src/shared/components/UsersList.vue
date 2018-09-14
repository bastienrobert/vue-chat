<template>
  <div :class="$style.UsersList">
    <h2>Astronautes</h2>
    <div :class="$style.users">
      <div :class="$style.wrapper">
        <User :user="user" :index="index" v-for="(user, index) in users" :key="user.username" />
      </div>
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
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    background: linear-gradient(rgba($darkGrey, 0), $darkGrey);
  }
  h2 {
    color: $white;
    text-transform: uppercase;
    font-size: 1.4em;
    margin-bottom: 1.5em;
  }
  .users {
    max-height: 60vh;
    overflow: scroll;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    div:last-child {
      margin-bottom: 4em;
    }
  }
  .rocket {
    position: absolute;
    top: 110vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    transition: translate 2s;
  }
}
</style>
