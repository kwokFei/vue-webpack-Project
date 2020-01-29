// 这是入口文件
import Vue from "vue"
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'


import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);


// 引入mui
import './lib/mui/css/mui.min.css';
// import './lib/mui/js/mui.min.js




new Vue({
  el : "#app",
  render : c => c(app),
  router,

})