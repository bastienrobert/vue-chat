<template>
  <div :class="$style.MessagesList">
    <div :class="$style.wrapper">
      <div v-for="({message, user}) in messages">
        <Message :message="message" :from="user" />
      </div>
    </div>
  </div>
</template>

<script>
import Message from './Message'
import { mapGetters } from 'vuex'

export default {
  components: {
    Message
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
  height: 100%;
  overflow: hidden;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    overflow: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      background-color: $darkGrey;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $dark;
    }
  }
}
</style>
