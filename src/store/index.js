import Vue from 'vue'
import Vuex from 'vuex'
import api from 'api'
import io from 'socket.io-client'
import { host, getRandomAvatar } from 'config'

Vue.use(Vuex)

const socket = io(host)
const plugin = api(socket)

const store = new Vuex.Store({
  state: {
    connected: false,
    users: [],
    currentuser: null,
    messages: [],
    typing: false,
    currentUserTyping: false,
    bonus: {
      msn: false
    }
  },
  getters: {
    bonus: state => state.bonus,
    messages: state => state.messages,
    queue: state => state.queue,
    currentuser: state => state.currentuser,
    users: state => state.users,
    typing: state => state.typing,
    currentUserTyping: state => state.currentUserTyping
  },
  mutations: {
    EDIT_BONUS: (state, payload) => {
      state.bonus = { ...state.bonus, ...payload }
    },
    UPDATE_MESSAGES: (state, payload) => {
      state.messages = payload.messages
    },
    USERS_UPDATE: (state, payload) => {
      if (state.users.length <= 0) {
        state.users = payload.users.map(
          user => !user.avatar ? { ...user, avatar: getRandomAvatar() } : user
        )
      } else {
        if (payload.user.type === 'join') {
          let user = payload.user
          if (!user.avatar) {
            user.avatar = getRandomAvatar()
          }
          state.users.push(user)
        } else {
          state.users = state.users.filter(user => user !== payload.user)
        }
      }
    },
    SET_CURRENT_USER: (state, payload) => {
      state.currentuser = payload
    },
    SET_CONNECTION_STATE: (state, payload) => {
      state.connected = payload
    },
    TYPING: (state, payload) => {
      state.typing = payload
    },
    CURRENT_USER_TYPING: (state, payload) => {
      state.currentUserTyping = payload
    }
  },
  actions: {
    setCurrentUser: ({ commit, state }, payload) => {
      commit('SET_CURRENT_USER', payload)
    },
    clearCurrentUser: ({ commit, state }, payload) => {
      commit('SET_CURRENT_USER', {})
    },
    // Need o be checked again, some errors here probably
    userIsTyping: ({ commit, state }, payload) => {
      commit('CURRENT_USER_TYPING', payload)
    },
    editBonus: ({ commit, state }, payload) => {
      commit('EDIT_BONUS', payload)
    },
  },
  plugins: [plugin],
  strict: true
})

export default store
