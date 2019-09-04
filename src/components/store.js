import {createStore} from '@mpxjs/core'

const store = createStore({
  state: {
    isLogin: false,
    location: {},
    userInfo: {}
  },
  mutations: {
    change () {
    }
  }
});

export default store
