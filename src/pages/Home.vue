<template>
  <div :class="$style.Home">
    <div :class="$style.sidebar">
      <Sidebar />
    </div>
    <div :class="$style.chat">
      <TopBar @disconnect="disconnect" />
      <div :class="$style.messages" ref="wrapper">
        <MessagesList />
      </div>
      <SendForm />
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie'
import { mapActions, mapGetters } from 'vuex'

import TopBar from 'components/TopBar'
import SendForm from 'components/SendForm'
import MessagesList from 'components/MessagesList'
import Sidebar from 'components/Sidebar'

export default {
  name: 'Home',
  components: {
    TopBar,
    SendForm,
    MessagesList,
    Sidebar
  },
  mounted() {
    this.autoscroll()
  },
  methods: {
    ...mapActions([
      'clearCurrentUser'
    ]),
    disconnect() {
      this.clearCurrentUser()
      this.$router.push({ name: 'login' })
    },
    autoscroll() {
      this.$refs.wrapper.scrollTop = this.$refs.wrapper.scrollHeight
    }
  },
  computed: {
    ...mapGetters([
      'currentuser',
      'messages'
    ])
  },
  watch: {
    messages(data) {
      // Yep, this is no rly cool :/
      data.length > 0 && setTimeout(this.autoscroll, 50)
    }
  },
  beforeRouteEnter: (to, from, next) => {
    this.currentuser
      ? next()
      : next({name: 'login'})
    next()
  }
}
</script>

<style lang="scss" scoped module>
.Home {
  display: flex;
  height: 100vh;
  .sidebar {
    width: 30%;
    max-width: 400px;
  }
  .chat {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .messages {
    flex: 1;
    max-height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      background-color: $darkGrey;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $dark;
    }
  }
}
</style>
