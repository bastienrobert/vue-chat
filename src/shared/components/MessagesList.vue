<template>
  <div class="MessagesList">
    <div v-for="(message) in messages">
      <Message :message="message.text" :from="message.from" />
    </div>
  </div>
</template>

<script>
import Message from './Message'

export default {
  components: {
    Message
  },
  props: ['messages']
}
</script>

<style lang="scss" scoped>
.Hello {
  h1, h2 {
    font-weight: normal;
  }
}
</style>
