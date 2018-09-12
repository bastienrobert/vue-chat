<template>
  <div class="more" />
</template>

<script>
export default {
}
</script>

<style lang="scss">
.more {
  color: #8BC7F4;
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  border: solid 1px currentColor;
  background-color: currentColor;

  &:before {
    content: '';
    position: absolute;
    left: -1px;
    top: -8px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    border: solid 1px currentColor;
    background-color: currentColor;
  }

  &:after {
    content: '';
    position: absolute;
    left: -1px;
    top: 6px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    border: solid 1px currentColor;
    background-color: currentColor;
  }
}
</style>
