<template>
  <div class="SendMessage">
    <input type="text" placeholder="Message" v-model="message">
    <input type="submit" value="Send" v-on:click="onClick">
  </div>
</template>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    onClick() {
      this.$emit('addMessage', this.message)
      this.message = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.Hello {
  h1, h2 {
    font-weight: normal;
  }
}
</style>
