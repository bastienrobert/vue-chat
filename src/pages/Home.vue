<template>
  <div :class="$style.Home">
    <div :class="$style.sidebar">
      <Sidebar />
    </div>
    <div :class="$style.chat">
      <TopBar @disconnect="disconnect" />
      <div :class="$style.messages">
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

// const cookie = Cookies.getJSON('vue-chat') || {}

export default {
  name: 'Home',
  components: {
    TopBar,
    SendForm,
    MessagesList,
    Sidebar
  },
  // created() {
  //   const {name, uid} = cookie
  //   this.setCurrentUser({name, uid})
  // },
  methods: {
    ...mapActions([
      // 'setCurrentUser',
      'clearCurrentUser'
    ]),
    disconnect() {
      // Cookies.remove('vue-chat')
      this.clearCurrentUser()
      this.$router.push({ name: 'login' })
    }
  },
  computed: {
    ...mapGetters([
      'currentuser'
    ])
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
  }
}
</style>
