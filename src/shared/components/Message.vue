<template>
  <div :class="className">
    <img :class="$style.avatar" :src="avatar" />
    <div :class="$style.content">
      <div :class="$style.message">
        {{ message }}
      </div>
      <div :class="$style.from">
        <strong>{{ from.username }}</strong>, {{ created }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { avatars } from 'config'

export default {
  props: ['message', 'from', 'date'],
  computed: {
    ...mapGetters([
      'currentuser',
      'users'
    ]),
    created() {
      const date = new Date(this.date)
      return `${date.getHours()}h${date.getMinutes()}`
    },
    avatar() {
      const user = this.users.find(user => user.username === this.from.username)
      return user ? user.avatar : avatars['planet']
    },
    className() {
      return this.from.username === this.currentuser.username ? `${this.$style.fromMe} ${this.$style.Message}` : this.$style.Message
    }
  }
}
</script>

<style lang="scss" scoped module>
.fromMe {
  align-self: flex-end;
  flex-direction: row-reverse;
  .content {
    background-color: $doveGrey!important;
  }
  .avatar {
    margin-left: 15px;
  }
}
.Message {
  position: relative;
  display: flex;
  width: 60%;
  max-width: 600px;
  padding: 15px 0;
  align-items: center;
  .avatar {
    height: 35px;
    width: 35px;
    background-color: $white;
    border-radius: 50%;
    margin-right: 15px;
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
    font-size: .95em;
    word-break: break-word;
    line-height: 1.5;
    font-family: 'Montserrat';
  }
  .from {
    font-size: .8em;
    font-style: italic;
    color: $easternBlue;
    font-family: 'Montserrat';
    text-transform: capitalize;
    strong {
      font-weight: 600;
    }
  }
}
</style>
