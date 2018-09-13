<template>
  <div class="User">
    {{ user.name }}
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

<style lang="scss" scoped>
.Hello {
  h1, h2 {
    font-weight: normal;
  }
}
</style>
