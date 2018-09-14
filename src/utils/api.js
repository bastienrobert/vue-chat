import Emitter from 'utils/Emitter'

export default function api(socket) {
  return store => {
    // outcoming data
    socket.on('connect', () => {
      store.commit('SET_CONNECTION_STATE', true)
    })

    socket.on('message new', messages => {
      store.commit('TYPING', false)
      store.commit('UPDATE_MESSAGES', messages)
    })

    socket.on('chat error', err => {
      console.log(err.code, err.message)
    })

    socket.on('user typing', () => {
      store.commit('TYPING', true)
    })

    socket.on('users update', data => {
      store.commit('USERS_UPDATE', data)
    })

    Emitter.on('ADD_MESSAGE', payload => {
      socket.emit('message new', payload.message)
    })

    // incoming data
    store.subscribe(mutation => {
      const { type, payload } = mutation

      switch (type) {
        case 'SET_CURRENT_USER':
          socket.emit('user register', payload)
          break
        case 'CURRENT_USER_TYPING':
          socket.emit('user typing')
          break
        default:
          return null
      }
    })
  }
}
