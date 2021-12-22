import { createStore } from 'vuex'

export default createStore({
  state: {
    user: 'Elle Belle',
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {},
  modules: {}
})
