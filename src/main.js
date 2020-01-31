// 这是入口文件
import Vue from "vue"
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'


import {
  Header
} from 'mint-ui';
Vue.component(Header.name, Header);


import {
  Tabbar,
  TabItem
} from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

import { Spinner } from 'mint-ui';

Vue.component(Spinner.name, Spinner);


// 引入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/iconfont.css'

import './css/baic.css'

import axios from 'axios'; //导入axios
Vue.prototype.axios = axios;  //把axios挂载到Vue的原型上

function rem() {
  var htmlEle = document.documentElement;
  var winWidth = htmlEle.clientWidth || document.body.clientWidth;

  console.log('width:', winWidth)  
  var width = winWidth >= 998 ? 998 : winWidth;
  htmlEle.style.fontSize = Math.ceil(100 * (width / 1920)) + 'px';
 
};
rem();
window.onresize = function () {
  rem();
}

new Vue({
  el: "#app",
  render: c => c(app),
  router,

})