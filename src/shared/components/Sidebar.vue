<template>
  <div :class="$style.Sidebar">
    <Parallax :className="$style.Parallax" />
    <div :class="$style.wrapper">
      <UsersList />
    </div>
  </div>
</template>

<script>
import UsersList from './UsersList'
import Parallax from './Parallax'

export default {
  components: {
    UsersList,
    Parallax
  }
}
</script>

<style lang="scss" scoped module>
.Sidebar {
  position: relative;
  height: 100%;
  .Parallax {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
