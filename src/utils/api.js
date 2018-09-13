export default function api (socket) {
  return store => {
    // outcoming data
    socket.on('connect', () => {
      store.commit('SET_CONNECTION_STATE', true)
    })

    // incoming data
    store.subscribe(mutation => {
      const {type, payload} = mutation

      switch (type) {
        case 'ADD_MESSAGE':
          socket.emit('message new', payload.message)
          break
        case 'SET_CURRENT_USER':
          socket.emit('user register', payload)
          break
        case 'USER_TYPING':
          socket.emit('user typing')
          break
        default:
          return null
      }
    })
  }
}
