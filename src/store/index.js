import Vue from 'vue'
import Vuex from 'vuex'
import api from 'api'
import io from 'socket.io-client'
import { host } from 'config'

Vue.use(Vuex)

const socket = io(host)
const plugin = api(socket)

const store = new Vuex.Store({
  state: {
    connected: false,
    users: [],
    currentuser: null,
    messages: [],
    typing: false
  },
  getters: {
    messages: state => state.messages,
    currentuser: state => state.currentuser,
    users: state => state.users,
    typing: state => state.typing
  },
  mutations: {
    ADD_MESSAGE: (state, payload) => {
      state.messages.push(payload)
    },
    ADD_USER: (state, payload) => {
      state.messages.push(payload)
    },
    SET_CURRENT_USER: (state, payload) => {
      state.currentuser = payload
    },
    SET_CONNECTION_STATE: (state, payload) => {
      state.connected = payload
    },
    TYPING: (state, payload) => {
      state.typing = payload
    }
  },
  actions: {
    addMessage: ({commit, state}, payload) => {
      if (payload.message.length <= 0) return null
      commit('ADD_MESSAGE', payload)
    },
    setCurrentUser: ({commit, state}, payload) => {
      commit('SET_CURRENT_USER', payload)
    },
    clearCurrentUser: ({commit, state}, payload) => {
      commit('SET_CURRENT_USER', null)
    },
    // Need o be checked again, some errors here probably
    userIsTyping: ({commit, state}, payload) => {
      commit('TYPING', payload)
    }
  },
  plugins: [plugin],
  strict: true
})

export default store
