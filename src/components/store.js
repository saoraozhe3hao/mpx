import {createStore} from '@mpxjs/core'

const store = createStore({
  state: {
    isLogin: false,
    systemInfo: {},
    area: '全国', // 当前选择的 搜索区域，格式为 省-市-县
    location: {},  // 当前定位的 经纬度
    address: {},   // 当前定位 的 省市县
    userInfo: {},  // 小程序本地获取到的用户信息
    customerInfo: {}, // 从后端获取的用户信息
    merchantInfo: {} // 从后端获取的趣导信息
  },
  mutations: {
    change () {
    }
  }
});

export default store
