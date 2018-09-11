// import socket from 'socket.io-client'
import {bus} from 'bus'

export default {

  install(Vue, options) {
    // const io = socket(options.address)

    Vue.mixin({
      sendMessage(msg) {
        console.log('Send message: ' + msg)
        bus.$emit('hey')
      }
    })
  }

}
