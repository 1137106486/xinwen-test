// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LyTab from 'ly-tab'
Vue.use(LyTab)

// 注册全局
var infiniteScroll = require('vue-infinite-scroll');
Vue.use(infiniteScroll)

Vue.use(VueAxios, axios);

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

