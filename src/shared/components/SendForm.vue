<template>
  <div :class="$style.SendMessage">
    <span :class="$style.pending" v-if="typing">Éjection en cours...</span>
    <form @submit.prevent="onSubmit" :class="$style.form">
      <input type="text" placeholder="Commencez à écrire" v-model="message" @keypress="onTyping">
      <picker set="apple" @select="addEmoji" :style="{ position: 'absolute', bottom: '50px', right: '30px' }" v-if="picker" />
      <input type="submit" value="Éjecter">
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { Picker } from 'emoji-mart-vue'
import Emitter from 'utils/Emitter'

export default {
  data: () => ({
    message: '',
    picker: false
  }),
  components: {
    Picker
  },
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
      // !this.typing && this.userIsTyping(true)
    },
    addEmoji(emoji) {
      this.message = this.message + emoji.native
    },
    onSubmit() {
      Emitter.emit('ADD_MESSAGE', { message: this.message })
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
    position: relative;
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto 12px;
    &:after {
      content: '';
      display: none;
      position: absolute;
      top: 4px;
      right: 105px;
      height: 17px;
      width: 17px;
      background-image: url('@/assets/images/picker.svg');
      background-repeat: no-repeat;
      content: '';
    }
  }
  input {
    outline: none;
  }
  input[type="text"] {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    appearance: none;
    padding: .5em .5em .65em;
    border: 0;
    border-radius: 7px;
    min-height: 26px;
    font-family: 'Montserrat';
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
    font-family: 'Montserrat';
  }
}
</style>
