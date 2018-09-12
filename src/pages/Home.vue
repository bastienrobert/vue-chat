<template>
  <div class="Home">
    <div class="header">
      <TopBar />
    </div>
    <div class="sidebar">
      <UsersList />
    </div>
    <div class="chat">
      <MessagesList :messages="messages"/>
      <div class="form">
        <SendForm @addMessage="addMessage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

import TopBar from 'components/TopBar'
import SendForm from 'components/SendForm'
import MessagesList from 'components/MessagesList'
import UsersList from 'components/UsersList'

export default {
  name: 'Home',
  components: {
    TopBar,
    SendForm,
    MessagesList,
    UsersList
  },
  data: () => ({
    messages: [
      {text: 'Hello', from: 'Bastien'}
    ]
  }),
  methods: {
    addMessage(msg) {
      this.messages.push({
        text: msg,
        from: 'Bastien'
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    const cookie = JSON.parse(Cookies.get('vue-chat') || null) || {}

    cookie && cookie.name && cookie.uid
      ? next()
      : next({name: 'login'})
  }
}
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
</style>
