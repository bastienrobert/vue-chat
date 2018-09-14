<template>
  <div :class="$style.Login">
    <Parallax :className="$style.Parallax"/>
    <div :class="$style.wrapper">
      <h1>Bonjour</h1>
      <p>Et bienvenue sur ce chat interstellaire;<br> pour commencer, indiquez votre pseudo<br> et attachez votre ceinture.</p>
      <form @submit.prevent="onSubmit">
        <div :class="$style.avatars">
          <input type="radio" name="avatar" id="avatar-1" value="alien" v-model="avatar">
          <label for="avatar-1" :class="$style.avatar" />
          <input type="radio" name="avatar" id="avatar-2" value="planet" v-model="avatar">
          <label for="avatar-2" :class="$style.avatar" />
          <input type="radio" name="avatar" id="avatar-3" value="rocket" v-model="avatar">
          <label for="avatar-3" :class="$style.avatar" />
        </div>
        <input type="text" placeholder="Entrez votre pseudo" v-model="username">
        <input type="submit" value="Décoller">
      </form>
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import { mapActions } from 'vuex'

import Parallax from 'components/Parallax'

export default {
  data: () => ({
    username: null,
    avatar: 'alien'
  }),
  components: {
    Parallax
  },
  methods: {
    ...mapActions([
      'setCurrentUser'
    ]),
    onSubmit: function() {
      const { username, avatar } = this
      if (username.length <= 0) return null

      // const cookie = Cookies.getJSON('vue-chat')
      //
      // Cookies.set('vue-chat', { ...cookie, username, avatar })
      this.setCurrentUser({username, avatar})
      this.$router.push({ name: 'root' })
    }
  }
}
</script>

<style lang="scss" scoped module>
.Parallax {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.Login {
  .wrapper {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
  }
  h1 {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 8em;
    color: #FFF;
    transform: translateX(-8px);
  }
  p {
    font-family: 'Montserrat';
    font-size: 1.1em;
    color: #FFF;
    margin: 1.5em 0 2em;
    line-height: 1.5em;
  }
  .avatars .avatar {
    &:nth-child(2) {
      background-image: url("@/assets/images/avatars/alien.svg");
    }
    &:nth-child(4) {
      background-image: url("@/assets/images/avatars/planet.svg");
    }
    &:nth-child(6) {
      background-image: url("@/assets/images/avatars/rocket.svg");
    }
  }
  .avatar {
    position: relative;
    display: inline-block;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: $white;
    background-size: contain;
    margin-right: 10px;
    &:after {
      content: '';
      display: block;
      position: absolute;
      height: 40px;
      width: 40px;
      border-radius: 50%;
      box-sizing: border-box;
    }
  }
  input[type="radio"] {
    visibility: hidden;
    position: absolute;
    z-index: -1;

    &:checked + .avatar:after {
      border: 1px solid $pink;
    }
  }
  input[type="text"],
  input[type="submit"] {
    display: block;
    min-width: 200px;
    outline: none;
  }
  input[type="text"] {
    margin-top: 2em;
    appearance: none;
    border: 0;
    border-bottom: 1px solid grey;
    background-color: transparent;
    font-size: 1em;
    padding-bottom: 6px;
    color: $white;
    &::placeholder {
      color: rgba($white, .3);
    }
  }
  input[type="submit"] {
    margin-top: 1.5em;
    appearance: none;
    background-color: $pink;
    text-transform: uppercase;
    border-radius: 10px;
    border: 0;
    color: $white;
    font-size: 1.1em;
    font-family: 'Montserrat';
    font-weight: 600;
    padding: .7em 0;
  }
}
</style>
