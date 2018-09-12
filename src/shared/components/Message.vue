<template>
  <div class="Message">
    <div class="user">
      {{ from }}
    </div>
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'from']
}
</script>

<style lang="scss" scoped>
.Hello {
  h1, h2 {
    font-weight: normal;
  }
}
</style>
