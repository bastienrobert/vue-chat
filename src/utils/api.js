import io from 'socket.io-client'
import store from 'store'
import { api } from 'config'

export default {
  install(Vue, options) {
    const socket = io(api)

    socket.on('connect', () => {
      store.commit('CONNECTED', true)
    })

    Vue.mixin({
      methods: {
        sendMessage: message => {
          store.commit('ADD_MESSAGE', { message })
          socket.emit('message', { message })
        }
      }
    })
  }
}
