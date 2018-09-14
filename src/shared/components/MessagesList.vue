<template>
  <div :class="$style.MessagesList">
    <div :class="$style.wrapper" ref="wrapper">
      <Message :message="text" :from="user" :date="created" v-for="({text, user, created}) in messages" :key="created" />
    </div>
  </div>
</template>

<script>
import Message from './Message'
import { mapGetters } from 'vuex'
import Emitter from 'utils/Emitter'

export default {
  components: {
    Message
  },
  mounted() {
    Emitter.on('wizz', this.bounce)
  },
  methods: {
    bounce() {
      this.$refs.wrapper.classList.add(this.$style.animation)
      window.setTimeout(() => {
        this.$refs.wrapper.classList.remove(this.$style.animation)
      }, 820)
    }
  },
  computed: {
    ...mapGetters([
      'messages'
    ])
  }
}
</script>

<style lang="scss" scoped module>
.MessagesList {
  display: flex;
  align-items: flex-end;
  background-color: $dark;
  min-height: 100%;
  overflow: hidden;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    &.animation {
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    }
  }
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
