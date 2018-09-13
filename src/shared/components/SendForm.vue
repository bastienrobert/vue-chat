<template>
  <div :class="$style.SendMessage">
    <span :class="$style.pending">Éjection en cours...</span>
    <form @submit.prevent="onSubmit" :class="$style.form">
      <input type="text" placeholder="Commencez à écrire" v-model="message" @change="onTyping">
      <input type="submit" value="Éjecter">
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['user'],
  data: () => ({
    message: ''
  }),
  computed: {
    ...mapGetters([
      'typing'
    ])
  },
  methods: {
    ...mapActions([
      'addMessage',
      'userIsTyping'
    ]),
    onTyping() {
      console.log(this.typing)
      !this.typing && this.userIsTyping(true)
    },
    onSubmit() {
      this.addMessage({ message: this.message })
      this.message = ''
      this.userIsTyping(false)
    }
  }
}
</script>

<style lang="scss" scoped module>
.SendMessage {
  background-color: $dark;
  .pending {
    display: block;
    width: 90%;
    margin: 0 auto 7px;
    color: rgba($white, .4);
    font-size: .7em;
    font-family: 'Montserrat';
    font-style: italic;
  }
  .form {
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto 12px;
  }
  input {
    outline: none;
  }
  input[type="text"] {
    flex: 1;
    box-sizing: border-box;
    appearance: none;
    padding: .5em .5em .65em;
    border: 0;
    border-radius: 7px;
    min-height: 26px;
    &::placeholder {
      font-style: italic;
    }
  }
  input[type="submit"] {
    display: block;
    appearance: none;
    padding: .5em 1.5em .65em;
    border: 0;
    border-radius: 7px;
    margin-left: 13px;
    text-transform: uppercase;
    color: $white;
    background-color: $pink;
    font-size: .7em;
  }
}
</style>
