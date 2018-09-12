import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    connected: false,
    users: [],
    messages: []
  },
  getters: {},
  mutations: {
    ADD_MESSAGE: (state, payload) => {
      state.messages.push(payload)
    },
    ADD_USER: (state, payload) => {
      state.messages.push(payload)
    },
    CONNECTED: (state, payload) => {
      state.connected = payload
    }
  },
  actions: {}
})

export default store
