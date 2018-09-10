<template>
  <div class="Login">
    <Hello />
    <input type="text" placeholder="Your name" v-model="name" />
    <button @click="connect">Submit</button>
  </div>
</template>

<script>
import router from 'router'
import Cookies from 'js-cookie'
import {generateGuid} from 'helpers'

import Hello from 'components/Hello'

export default {
  components: {
    Hello
  },
  data: () => ({
    name: null
  }),
  methods: {
    connect: function() {
      const {name} = this
      const cookie = Cookies.get('vue-chat')
      const uid = generateGuid()

      Cookies.set('vue-chat', JSON.stringify({...cookie, name, uid}))
      router.push({name: 'root'})
    }
  }
}
</script>

<style lang="scss" scoped>
.Form {

}
</style>
