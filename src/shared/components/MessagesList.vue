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
  }
}
</style>
