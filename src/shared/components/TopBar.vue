<template>
  <div class="TopBar">
    <h1>Chat</h1>
    <div class="MoreIcon">
      <MoreIcon />
    </div>
  </div>
</template>

<script>
import {More as MoreIcon} from 'icons'

export default {
  components: {
    MoreIcon
  }
}
</script>

<style lang="scss" scoped>
.TopBar {
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #EDEDED;
  align-items: center;
  justify-content: center;

  h1 {
    color: #8BC7F4;
    font-size: 2em;
  }

  .MoreIcon {
    position: absolute;
    right: 30px;
  }
}
</style>
