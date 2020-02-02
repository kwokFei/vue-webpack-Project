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

import {
  Spinner
} from 'mint-ui';

Vue.component(Spinner.name, Spinner);


// 引入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/iconfont.css'

// 引入自己的css
import './css/baic.css'


// 引入axois
import axios from 'axios'; //导入axios
Vue.prototype.axios = axios; //把axios挂载到Vue的原型上

function rem() {
  var htmlEle = document.documentElement;
  var winWidth = htmlEle.clientWidth || document.body.clientWidth;
  var width = winWidth >= 998 ? 998 : winWidth;
  htmlEle.style.fontSize = Math.ceil(100 * (width / 1920)) + 'px';
};
rem();
window.onresize = function () {
  rem();
}

import moment from 'moment'
Vue.filter('tiemForm', function (time,fmt="YYYY-MM-DD jj:mm:ss") {
  return  moment(time).format(fmt);
  // let d = new Date(time)
  // let Y = d.getFullYear();
  // let M = (d.getMonth() + 1).toString().padStart(2,"0");
  // let D = d.getDate().toString().padStart(2,"0"); //获取当前日(1-31)
  // let hh = d.getHours().toString().padStart(2,"0") //获取当前小时数(0-23)
  // let mm = d.getMinutes().toString().padStart(2,"0"); //获取当前分钟数(0-59)
  // let ss = d.getSeconds().toString().padStart(2,"0"); //获取当前秒数(0-59)
  // return `${Y}-${M}-${D} ${hh}:${mm}:${ss}`;
})

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

new Vue({
  el: "#app",
  render: c => c(app),
  router,

})