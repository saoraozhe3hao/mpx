import {createStore} from '@mpxjs/core'

const store = createStore({
  state: {
    location: 3,
    userInfo: {}
  },
  mutations: {
    change () {
      console.log(33)
    },
    setLocation(state, payload) {
      state.location = payload;
    }
  }
});

export default store
