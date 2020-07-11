import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import "@/assets/iconfont/iconfont.css";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "zico/css/zico.min.css";


import axios from 'axios'
Vue.prototype.axios = axios
Vue.config.productionTip = false
require("./mock");


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
