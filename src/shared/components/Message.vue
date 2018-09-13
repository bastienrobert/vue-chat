<template>
  <div :class="$style.Message">
    <div :class="$style.avatar" />
    <div :class="$style.content">
      <div :class="$style.message">
        {{ message }}
      </div>
      <div :class="$style.from">
        {{ from.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'from']
}
</script>

<style lang="scss" scoped module>
.Message {
  position: relative;
  display: flex;
  width: 60%;
  max-width: 600px;
  padding: 15px 0;
  align-items: flex-start;
  .avatar {
    height: 35px;
    width: 35px;
    background-color: $white;
    border-radius: 50%;
    margin-right: 15px;
    margin-top: 5px;
  }
  .content {
    position: relative;
    flex: 1;
    background-color: $mineShaft;
    padding: 7px;
    border-radius: 8px;
  }
  .message {
    color: $white;
    margin-bottom: 7px;
    word-break: break-word;
  }
  .from {
    font-size: .8em;
    font-style: italic;
    color: $easternBlue;
  }
}
</style>
