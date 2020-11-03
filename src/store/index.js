import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
Vue.prototype.axios = axios
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    new:[]
  },
  mutations: {
    setnew(state,data){
      // console.log("setnew",data)
      state.new = data
    }
  },
  actions: {
    getnew(store){
      axios({
        url:"/new",
        method:"get"
      }).then(res=>{
        console.log("新闻",res.data)
        store.commit("setnew",res.data) //支持传参
      })
    }
  },
  modules: {
  }
})
